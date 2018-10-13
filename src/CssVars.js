import {ComponentElement, prop, bind, STATE_SYMBOL} from "component-element"
import {domFind} from "common-micro-libs/src/domutils/domFind"
import {objectKeys} from "common-micro-libs/src/jsutils/runtime-aliases"
import {varsDefault} from "./vars-default";

//=========================================================================
const CSS_VAR_LIST = objectKeys(varsDefault);
const VARS_DEFAULT_STYLESHEET = CSS_VAR_LIST.reduce((allVars, varName) => {
    allVars += `${varName}: ${varsDefault[varName]};` + "\n";
    return allVars;
}, "");

export const VERSION = BUILD.DATA.VERSION; // eslint-disable-line

/**
 * An element that exposes several CSS variables that can be controlled and thus affect
 * the inner elements. Use it for styling common widgets
 *
 * @listens CssVars#set-vars
 * @fires CssVars#change
 */
export class CssVars extends ComponentElement {
    static get tagName() {
        return "css-vars";
    }

    /**
     * Returns an object with the default variables and associated values
     *
     * @returns {Object}
     */
    static get defaultVars() {
        return varsDefault;
    }

    /**
     * Returns an array with all the css var names
     *
     * @type {Array}
     */
    static get varNames() {
        return CSS_VAR_LIST.slice(0);
    }

    static get template() {
        return `
<style>
:host {
    display: block;

    ${VARS_DEFAULT_STYLESHEET}
}
</style>
<slot></slot>`;
    }

    /**
     * The set of props that should be set to the Element. Use this to set custom set of
     * var, thus enabling the creation of different themes.
     *
     * @property
     * @type {Object}
     */
    @prop
    get vars() {return {}; }
    set vars(newVars) {
        if ("object" !== typeof newVars) {
            console.warn("vars prop must be an object!"); // eslint-disable-line
            newVars = {};
        }
        if (this.vars && newVars !== this.vars) {
            clearCustomVars(this, this.vars, false);
            clearCustomVarsFromTargetElements(this);
        }
        return newVars;
    }


    /**
     * A DOM selector to where the css vars will also be set. This will be in addition to
     * setting the vars on this element itself.
     *
     * @property
     * @type {String}
     * @example
     *
     * <css-vars target":root"></css-vars>
     */
    @prop({attr: true})
    get target() { return null; }


    init() {
        this[STATE_SYMBOL] = {
            priorTarget: null,
            $style: null
        };

        /**
         * Set a new list of CSS Vars to the element.
         * The list of CSS Variables should be in the event's `details`.
         *
         * @event CssVars#set-vars
         * @extends CustomEvent
         * @type {CustomEvent}
         *
         * @property {Object} detail
         */
        this.on("set-vars", this);

        // When `vars` change - set vars that were provided
        this.onPropsChange(this._handleCustomVarsChange, "vars");

        // When `target` changes, clean out existing <style> tag for defaults and apply new one
        this.onPropsChange(this._handleTargetChange, "target");

        this.onDestroy(() => {
            clearDefaultVarsForTargetElements(this);
            clearCustomVarsFromTargetElements(this);
        });
    }

    ready() {
        this._handleCustomVarsChange();
        this._handleTargetChange();
    }


    @bind
    _handleCustomVarsChange() {
        setCustomVars(this, this.props.vars);
        setCustomVarsOnTargetElements(this);
    }


    @bind
    _handleTargetChange() {
        // Tear down and create new (if applicable) default styles for selector
        if (this[STATE_SYMBOL].priorTarget && this[STATE_SYMBOL].priorTarget !== this.props.target) {
            clearDefaultVarsForTargetElements(this);
            clearCustomVarsFromTargetElements(this);
        }

        if (this.props.target) {
            // If no defaults are yet created for this target, do it now
            if (!this[STATE_SYMBOL].$style) {
                this[STATE_SYMBOL].$style = createStyleElement(`
${this.props.target} {
    ${VARS_DEFAULT_STYLESHEET}
}
`);
            }

            setCustomVarsOnTargetElements(this);
        }
    }

    handleEvent(ev) {
        if (ev.type === "set-vars" && ev.detail) {
            this.clear();
            this.props.vars = ev.detail;
        }
    }

    /**
     * clears the current set of css vars from the element that
     * were applied outside of the default
     * (essentially: clears out props.vars object)
     */
    clear() {
        clearCustomVars(this, this.props.vars);
        this.props.vars = {};
    }

    /**
     * List of all CSS variables set/used by this Element
     *
     * @returns {Array}
     */
    getVarNames() {
        return this.constructor.varNames;
    }
}

function setCustomVars(ele, vars, emit = true) {
    const varsKeys = objectKeys(vars);
    if (varsKeys.length) {
        varsKeys.forEach(varName => {
            ele.style.setProperty(varName, vars[varName]);
        });

        if (emit && ele.emit) {
            /**
             * Style variables have changed
             * @event CssVars#change
             */
            ele.emit("change", null, {bubble: true});
        }
    }
}

function clearCustomVars(ele, vars, emit = true) {
    const varsKeys = objectKeys(vars);
    if (varsKeys.length) {
        varsKeys.forEach(cssPropName => ele.style.removeProperty(cssPropName));
        if (emit && ele.emit) {
            this.emit("change", null, {bubble: true});
        }
    }
}

function setCustomVarsOnTargetElements(cssVarsInst) {
    if (cssVarsInst.props.target) {
        domFind(document, cssVarsInst.props.target).forEach(targetEle => {
            setCustomVars(targetEle, cssVarsInst.props.vars, false);
        });
        cssVarsInst[STATE_SYMBOL].priorTarget = cssVarsInst.props.target;
    }
}

function clearCustomVarsFromTargetElements(cssVarsInst) {
    if (cssVarsInst[STATE_SYMBOL].priorTarget) {
        domFind(document, cssVarsInst[STATE_SYMBOL].priorTarget).forEach(targetEle => {
            clearCustomVars(targetEle, cssVarsInst.props.vars, false);
        });
        cssVarsInst[STATE_SYMBOL].priorTarget = null;
    }
}

function clearDefaultVarsForTargetElements(cssVarsInst) {
    if (cssVarsInst[STATE_SYMBOL].$style) {
        cssVarsInst[STATE_SYMBOL].$style.parentNode.removeChild(cssVarsInst[STATE_SYMBOL].$style);
        cssVarsInst[STATE_SYMBOL].$style = null;
    }
}

function createStyleElement(stylesheetContent) {
    const style = document.createElement("style");
    const head = document.head;

    style.type = "text/css";

    if (style.styleSheet) {
        style.styleSheet.cssText = stylesheetContent;
    } else {
        style.appendChild(document.createTextNode(stylesheetContent));
    }

    if (head.hasChildNodes()) {
        head.insertBefore(style, head.firstChild)
    } else {
        head.appendChild(style);
    }

    return style;
}

export default CssVars;
