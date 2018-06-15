import {ComponentElement, prop} from "component-element"
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

    init() {
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
        this.onPropsChange(() => setStyleVarsOnElement(this, this.props.vars), "vars");
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
        const varsKeys = objectKeys(this.props.vars);
        if (varsKeys.length) {
            varsKeys.forEach(cssPropName => this.style.removeProperty(cssPropName));
            this.props.vars = {};
            this.emit("change", null, {bubble: true});
        }
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

function setStyleVarsOnElement(ele, vars) {
    const varsKeys = objectKeys(vars);
    if (varsKeys.length) {
        varsKeys.forEach(varName => {
            ele.style.setProperty(varName, vars[varName]);
        });

        /**
         * Style variables have changed
         * @event CssVars#change
         */
        this.emit("change", null, {bubble: true});
    }
}

export default CssVars;
