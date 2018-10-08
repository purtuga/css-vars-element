import {ComponentElement} from "component-element"

//=============================================================

/**
 *
 * @extends ComponentElement
 */
export class ThemeEditor extends ComponentElement {
    //-------------------------------------------------------------
    //
    //                                              STATIC MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
    static get tagName() {
        return "theme-editor";
    }

    static get template() {
        return `
<style>
    :host {
        display: block;
        position: relative;
        box-sizing: border-box;
    }
    * {
        box-sizing: border-box;
    }
    .container {
        display: flex;
    }
    .theme {
        width: 30%;
    }
    .preview {
        width: 69.4%;
        margin-left: 0.5%;
    }
</style>
<div class="container">
    <div class="theme">
        <h1>Theme CSS Vars</h1>
    </div>
    <div class="preview">
        <css-vars>
            <div style="
                    margin:             var(--theme-spacing-8);
                    padding:            var(--theme-spacing-5);
                    background-color:   var(--theme-color-bg);
                    color:              var(--theme-color-fg);
                    font-family:        var(--theme-font-family);
                    border:             var(--theme-border);
                    border-color:       var(--theme-color-2);
                    box-shadow:         var(--theme-box-shadow);
                ">
                <h1>Preview</h1>
                
                <p>
                    A paragraph with text and some 
                    <a href="javascript:"
                        style="
                            color: var(--theme-color-link)
                        ">links</a>. 
                </p>
                
                <p>
                    <code style="
                            font-font: var(--theme-font-family-monospace);
                        ">Some code or fixed width text here</code>
                </p>
                
                <hr>
                
                <p style="font-size: var(--theme-font-size-xxl);">XXL Text here</p>
                <p style="font-size: var(--theme-font-size-xl);">XL Text here</p>
                <p style="font-size: var(--theme-font-size-l);">L Text here</p>
                <p style="font-size: var(--theme-font-size-m);">M Text here</p>
                <p style="font-size: var(--theme-font-size-s);">S Text here</p>
                <p style="font-size: var(--theme-font-size-xs);">XS Text here</p>
                
                <hr>
                
                <p style="
                        padding:    var(--theme-spacing-5);
                        background: var(--theme-color-msg-success-bg);
                        color:      var(--theme-color-msg-success-fg);
                    ">A success Message</p>
                
                <p style="
                        padding:    var(--theme-spacing-5);
                        background: var(--theme-color-msg-alert-bg);
                        color:      var(--theme-color-msg-alert-fg)
                    ">An Alert Message</p>
                
                <p style="
                        padding:    var(--theme-spacing-5);
                        background: var(--theme-color-msg-warning-bg);
                        color:      var(--theme-color-msg-warning-fg)
                    ">A Warning Message</p>
                
                <p style="
                        padding:    var(--theme-spacing-5);
                        background: var(--theme-color-msg-info-bg);
                        color:      var(--theme-color-msg-info-fg)
                    ">An Informational Message</p>
                
                <p style="
                        padding:    var(--theme-spacing-5);
                        background: var(--theme-color-msg-error-bg);
                        color:      var(--theme-color-msg-error-fg)
                    ">An Error Message</p>
                
                <p style="
                        padding:    var(--theme-spacing-3);
                        border: var(--theme-border);
                        border-radius: var(--theme-border-radius)
                    ">Borders with round corners</p>
            </div>
        </css-vars>
    </div>
</div>
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

export default ThemeEditor;
