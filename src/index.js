import {ComponentElement, prop, STATE_SYMBOL} from "component-element"
import {domFind} from "common-micro-libs/src/domutils/domFind"
import {objectKeys} from "common-micro-libs/src/jsutils/runtime-aliases"
import {varsDefault} from "./vars-default";

//=========================================================================
const CSS_VAR_LIST = objectKeys(varsDefault);

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

    static get template() {
        return `
<style>
:host {
    display: block;

    ${CSS_VAR_LIST.reduce((allVars, varName) => {
        allVars += `${varName}: ${varsDefault[varName]};` + "\n";
        return allVars;
    }, "")}
}
</style>
<slot></slot>`;
    }

    /**
     * The set of props that should be set to the Element.
     * @property
     * @type {Object}
     */
    @prop
    get vars() {return {}; }
    set vars(newVars) {
        if ("object" !== typeof newVars) {
            console.warn("vars prop must be an object!"); // eslint-disable-line
            return this.vars;
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
     * <css-vars to":root"></css-vars>
     */
    @prop({attr: true})
    get target() {}


    init() {
        this[STATE_SYMBOL] = {
            priorTo: null
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
        this.onPropsChange(() => {
            setCustomVars(this, this.props.vars);
            setStyleVarsOnToElements(this);
        }, "vars");
        this.onPropsChange(() => {
            clearStyleVarsFromToElements(this);
            setStyleVarsOnToElements(this)
        }, "target");
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
        return CSS_VAR_LIST.slice(0);
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

function setStyleVarsOnToElements(cssVarsInst) {
    if (cssVarsInst.props.target) {
        domFind(document, cssVarsInst.props.target).forEach(targetEle => {
            setCustomVars(targetEle, cssVarsInst.props.vars, false);
        });
        cssVarsInst[STATE_SYMBOL].priorTo = cssVarsInst.props.target;
    }
}

function clearStyleVarsFromToElements(cssVarsInst) {
    if (cssVarsInst[STATE_SYMBOL].priorTo) {
        domFind(document, cssVarsInst[STATE_SYMBOL].priorTo).forEach(targetEle => clearCustomVars(targetEle, cssVarsInst.props.vars, false));
        cssVarsInst[STATE_SYMBOL].priorTo = null;
    }
}


export default CssVars;
