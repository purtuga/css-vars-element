import {ComponentElement} from "@purtuga/component-element"

//=============================================================

/**
 * Tab strip custom element. Shows tab on the page. Tabs are defined
 * by whatever elements are placed into the this component (slot content).
 *
 * A css class name of `.tab` and `is-selected` as well as HTML attributes
 * by the same value are recognized on the tabs and styles applied
 *
 * Examples: Valid usages
 *
 * ```html
 * <tab-strip>
 *     <div class="tab">tab 1</div>
 *     <div tab>Tab 1</div>
 *     <div tab is-selected>Tab 3</div>
 * </tab-strip>
 * ```
 *
 * @extends ComponentElement
 */
export class TabStrip extends ComponentElement {
    //-------------------------------------------------------------
    //
    //                                              STATIC MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
    static get tagName() {
        return "tab-strip";
    }

    static get template() {
        return `
<style>
    :host {
        --color-unselected: transparent;
        --color-selected: #0078d7;
        --color-hover: #deecf9;
        
        display: block;
        position: relative;
        box-sizing: border-box;
        padding: 0.2em 0 0;
        border-bottom:  1px solid var(--color-hover);
    }
    
    ::slotted(.tab),
    ::slotted([tab]) {
        vertical-align: middle;
        display: inline-block;
        cursor: pointer;
        padding: 0.5em;
        border-bottom: 3px solid transparent;
    }

    ::slotted(.tab:hover),
    ::slotted([tab]:hover) {
        border-bottom-color: var(--color-hover);
    }
    
    ::slotted(.tab.is-selected),
    ::slotted([tab][is-selected]) {
        border-bottom-color: var(--color-selected);
    }

    /*-- SIZE == small -------------- */
    :host([size="small"]) ::slotted(.tab),
    :host([size="small"]) ::slotted([tab]) {
        font-size: 0.8em;
    }
    
    /*-- SIZE == MEDIUM -------------- */
    :host([size="medium"]) ::slotted(.tab),
    :host([size="medium"]) ::slotted([tab]) {
        font-size: 1.2em;
    }
    
    /*-- SIZE == LARGE -------------- */
    :host([size="large"]) ::slotted(.tab),
    :host([size="large"]) ::slotted([tab]) {
        font-size: 1.4em;
    }
/*}*/
</style>
<slot></slot>
`;
    }

    // static get delayDestroy() {}
    // static get useShadow() {}
    // static get shadowMode() {}
    // static getEventInitOptions(){}
    // static get observedAttributes() {}

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC METHODS ~~~~~

    // static renderTemplate(ele) {}
    // static define(name) {}


    //-------------------------------------------------------------
    //
    //                                            INSTANCE MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  PROPS AND ATTRIBUTES  ~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    // init() {}

    // Called when all required `props` have been provided
    // ready() {}

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


}

export default TabStrip;
