import {ComponentElement, STATE_SYMBOL} from "component-element"
import {objectKeys} from "common-micro-libs/src/jsutils/runtime-aliases"

import {varsDefault} from "./vars-default";

//=========================================================================
const CSS_VAR_LIST = objectKeys(varsDefault);

/**
 * An element that exposes several CSS variables that can be controlled and thus affect
 * the inner elements. Use it for styling common widgets
 *
 * @listens CssVars#set-theme
 * @emits CssVars#change
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

    init() {
        this[STATE_SYMBOL] = {
            active: {}
        };
        /**
         * Set a new list of CSS Vars to the element.
         * The list of CSS Variables should be in the event's `details`.
         * @event CssVars#set-vars
         * @extends CustomEvent
         * @type {CustomEvent}
         */
        this.on("set-vars", this);
    }

    handleEvent(ev) {
        if (ev.type === "set-vars") {

        }
    }

    /**
     * clears the current set of css vars from the element
     */
    clear() {
        objectKeys(this[STATE_SYMBOL].active).forEach(cssPropName => this.style.removeProperty(cssPropName));
        this[STATE_SYMBOL].active = {};
    }

    /**
     * Sets the given vars on input on the current element
     * @param vars
     */
    set(vars) {
        objectKeys(vars).forEach(varName => {
            this.style.setProperty(varName, vars[varName]);
            this[STATE_SYMBOL].active[varName] = vars[varName];
        });
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

export default CssVars;
