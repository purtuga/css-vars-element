import {ComponentElement, prop, bind, STATE_SYMBOL} from "@purtuga/component-element"
import {domFind} from "@purtuga/common/src/domutils/domFind"
import {domMatches} from "@purtuga/common/src/domutils/domMatches"
import {
    objectKeys,
    doc,
    createTextNode,
    createElement,
    appendChild
} from "@purtuga/common/src/jsutils/runtime-aliases"
import {varsDefault} from "./vars-default";

//=========================================================================
export const VERSION = BUILD.DATA.VERSION; // eslint-disable-line
const CSS_VAR_LIST = objectKeys(varsDefault);
const VARS_DEFAULT_STYLESHEET = CSS_VAR_LIST.reduce((allVars, varName) => {
    allVars += `${varName}: ${varsDefault[varName]};` + "\n";
    return allVars;
}, "");
const toCssPropertiesString = varsObject => {
    return Object
        .entries(varsObject)
        .reduce((str, [property, value]) => (str += `${property}: ${value};`), "");
};
const isRootHtmlElement = ele => domMatches(ele, ":root");

/**
 * An element that exposes several CSS variables that can be controlled and thus affect
 * the inner elements. Use it for styling common widgets
 *
 * @listens CssVars#set-vars
 * @fires CssVars#change
 */
export class CssVars extends ComponentElement {
    static tagName = "css-vars";

    /**
     * Returns an object with the default variables and associated values
     *
     * @returns {Object}
     */
    static defaultVars = varsDefault;

    /**
     * Returns an array with all the css var names
     *
     * @type {Array}
     */
    static get varNames() {
        return CSS_VAR_LIST.slice(0);
    }

    render() {
        return `
<style>
:host {
    display: block;
}
</style>
<style vars>
:host {
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
    get vars() {
        return varsDefault;
    }
    set vars(newVars) {
        if ("object" !== typeof newVars) {
            console.warn("vars prop must be an object!"); // eslint-disable-line
            newVars = {};
        }
        return newVars;
    }


    /**
     * A DOM selector to where the css vars will also be set. This will be in addition to
     * setting the vars on this element itself.
     * If defined as a string, then its assume to be a css selector.  Value can also be
     * set as a DOM element or Style element. When a Style Element is used, the entire
     * Style element's content will be manipulated, so it should be one that does not
     * already contain defintions.
     *
     * @property
     * @type {String|HTMLElement|HTMLStyleElement}
     * @example
     *
     * <css-vars target":root"></css-vars>
     */
    @prop({attr: true})
    get target() {
        return null;
    }

    didInit() {
        this[STATE_SYMBOL] = {
            priorTarget: null,
            /** @type Array<HTMLElement> */
            $targets: null,
            $style: null
        };

        this.on("themeChange", this);

        // When `vars` change - set vars that were provided
        this.onPropsChange(this._handleCustomVarsChange, "vars");

        // When `target` changes, clean out existing <style> tag for defaults and apply new one
        this.onPropsChange(this._handleTargetChange, "target");
    }

    didRender() {
        this._varStyleEle = this.$("style[vars]");
        this._handleCustomVarsChange();
        this._handleTargetChange();
    }

    didUnmount() {
        clearCustomVarsFromTargetElements(this);
        stopPushingStylesToTargets(this);
    }

    @bind
    _handleCustomVarsChange() {
        clearCustomVars(this, this.vars, false);
        setCustomVars(this, this.props.vars);

        clearCustomVarsFromTargetElements(this);
        setCustomVarsOnTargetElements(this);
    }

    @bind
    _handleTargetChange() {
        // Tear down and create new (if applicable) default styles for selector
        if (this[STATE_SYMBOL].priorTarget && this[STATE_SYMBOL].priorTarget !== this.props.target) {
            clearCustomVarsFromTargetElements(this);
            stopPushingStylesToTargets(this);
        }

        if (this.props.target) {
            setCustomVarsOnTargetElements(this);
        }
    }

    handleEvent(ev) {
        if (ev.type === "themeChange" && ev.detail) {
            this.clear();
            this.props.vars = ev.detail && ev.detail.theme ? ev.detail.theme : ev.detail;
        }
    }

    /**
     * clears the current set of css vars from the element that
     * were applied outside of the default
     * (essentially: clears out props.vars object)
     */
    clear() {
        if (this.props.vars) {
            clearCustomVars(this, this.props.vars);
        }
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
        // Is it a CssVars element? if so, then set on internal <style> elememt
        if (ele._varStyleEle) {
            ele._varStyleEle.innerHTML = "";
            appendChild(
                ele._varStyleEle,
                createTextNode(`
:host {
${ toCssPropertiesString(vars) }
}
`
                )
            );

            // Is it A STYLE tag?, then replace its content
        } else if (ele.tagName === "STYLE") {
            ele.innerHTML = "";
            appendChild(ele, createTextNode(`
:root {
${ toCssPropertiesString(vars) } 
}
`));
            // ELSE: set directly on the element
        } else {
            varsKeys.forEach(varName => {
                ele.style.setProperty(varName, vars[varName]);
            });
        }

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
        varsKeys.forEach(cssPropName => {
            if (ele.tagName === "STYLE") {
                ele.innerHTML = "";
            } else {
                ele.style.removeProperty(cssPropName);
            }
        });

        if (emit && ele.emit) {
            ele.emit("change", null, {bubble: true});
        }
    }
}

function setCustomVarsOnTargetElements(cssVarsInst) {
    const state = cssVarsInst[STATE_SYMBOL];
    const {target, vars} = cssVarsInst.props;

    if (target) {
        if (!state.$targets) {
            if ("string" === typeof target) {
                state.$targets = domFind(doc, target);
            } else {
                state.$targets = [target];
            }
        }

        state.$targets.forEach(targetEle => {
            // :root is treated differently
            if (isRootHtmlElement(targetEle)) {
                // If no defaults are yet created for this target, do it now
                if (!state.$style) {
                    state.$style = createStyleElement("");
                }
                targetEle = state.$style;
            }

            setCustomVars(targetEle, vars, false);
        });

        cssVarsInst[STATE_SYMBOL].priorTarget = target;
    }
}

function clearCustomVarsFromTargetElements(cssVarsInst) {
    const state = cssVarsInst[STATE_SYMBOL];

    if (state.$targets) {
        state.$targets.forEach(targetEle => {
            if (isRootHtmlElement(targetEle)) {
                targetEle = state.$style;
            }
            clearCustomVars(targetEle, cssVarsInst.props.vars, false);
        });
    }
}

function stopPushingStylesToTargets(cssVarsInst) {
    const state = cssVarsInst[STATE_SYMBOL];
    if (state.$style) {
        state.$style.parentNode.removeChild(state.$style);
        state.$style = null;
    }
    if (state.$targets) {
        state.$targets = null;
    }
}

function createStyleElement(stylesheetContent) {
    const style = createElement("style");
    const head = doc.head;

    style.type = "text/css";
    appendChild(style, createTextNode(stylesheetContent));

    if (head.hasChildNodes()) {
        head.insertBefore(style, head.firstChild)
    } else {
        appendChild(head, style);
    }

    return style;
}

export default CssVars;
