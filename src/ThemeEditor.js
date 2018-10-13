import {ComponentElement} from "component-element"
import {functionBindCall} from "common-micro-libs/src/jsutils/runtime-aliases"

//=============================================================
const appendChild = functionBindCall(HTMLElement.prototype.appendChild);
const getNewDocFragment = () => document.createDocumentFragment();
const getHeader = title => {
    const header = document.createElement("h3");
    header.textContent = title;
    return header;
};
const getField = (name = "", value = "", isColor = "") => {
    const response = document.createElement("p");
    response.innerHTML = `
<label>${name}</label>
<div>
    <input type="${ isColor ? "color" : "text"}" name="${name}" value="${value}" />
${
    isColor
        ? `<input type="text" name="${name}" value="${value}" />`
        : ""
}
</div>`;
    return response;
};

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
    .vars {
        width: 30%;
    }
    .preview {
        width: 69.4%;
        margin-left: 0.5%;
    }
</style>
<div class="container">
    <div class="vars">
        <h1>Theme CSS Vars</h1>
        <div id="vars"></div>
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
    ready() {
        if (!this._setupDone) {
            this._setupDone = true;

            customElements.whenDefined("css-vars").then(() => {
                const varsCntr = this.$("#vars");
                const varNames = customElements.get("css-vars").varNames;
                const cssVarsEle = this.$("css-vars");
                let initialStyles = getComputedStyle(cssVarsEle);
                const reduceToColorFieldsDocFrag = (content, varName) => {
                    content.appendChild(getField(varName, initialStyles.getPropertyValue(varName).trim(), true));
                    return content;
                };
                let isMatch;

                // General Colors
                appendChild(varsCntr, getHeader("General Colors"));
                appendChild(
                    varsCntr,
                    [
                        "--theme-color-bg",
                        "--theme-color-fg",
                        "--theme-color-link"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Primary Colors
                isMatch = /-color-\d+/;
                appendChild(varsCntr, getHeader("Primary Colors"));
                appendChild(
                    varsCntr,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: INFO
                isMatch = /-color-accent-info-\d+/;
                appendChild(varsCntr, getHeader("Secondary: Accent Info"));
                appendChild(
                    varsCntr,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: SUCCESS
                isMatch = /-color-accent-success-\d+/;
                appendChild(varsCntr, getHeader("Secondary: Accent Success"));
                appendChild(
                    varsCntr,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: ALERT
                isMatch = /-color-accent-alert-\d+/;
                appendChild(varsCntr, getHeader("Secondary: Accent Alert"));
                appendChild(
                    varsCntr,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: WARNING
                isMatch = /-color-accent-warning-\d+/;
                appendChild(varsCntr, getHeader("Secondary: Accent Warning"));
                appendChild(
                    varsCntr,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: ERROR
                isMatch = /-color-accent-error-\d+/;
                appendChild(varsCntr, getHeader("Secondary: Accent Error"));
                appendChild(
                    varsCntr,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;


                // Messages: Success
                appendChild(varsCntr, getHeader("Colored Messages: Success"));
                appendChild(
                    varsCntr,
                    [
                        "--theme-color-msg-success-bg",
                        "--theme-color-msg-success-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Messages: Alert
                appendChild(varsCntr, getHeader("Colored Messages: Alert"));
                appendChild(
                    varsCntr,
                    [
                        "--theme-color-msg-alert-bg",
                        "--theme-color-msg-alert-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Messages: Warning
                appendChild(varsCntr, getHeader("Colored Messages: Warning"));
                appendChild(
                    varsCntr,
                    [
                        "--theme-color-msg-warning-bg",
                        "--theme-color-msg-warning-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Messages: Info
                appendChild(varsCntr, getHeader("Colored Messages: Info"));
                appendChild(
                    varsCntr,
                    [
                        "--theme-color-msg-info-bg",
                        "--theme-color-msg-info-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Messages: Error
                appendChild(varsCntr, getHeader("Colored Messages: Error"));
                appendChild(
                    varsCntr,
                    [
                        "--theme-color-msg-error-bg",
                        "--theme-color-msg-error-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Borders and spacing



                varsCntr.addEventListener("input", ev => {
                    if (ev.target.type === "text" || ev.target.type === "color") {
                        if (ev.target.type === "color") {
                            ev.target.parentElement.querySelector("input[type='text']").value = ev.target.value;
                        }

                        cssVarsEle.style.setProperty(ev.target.name, ev.target.value);
                    }
                });

                initialStyles = null;
            });
        }
    }

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


}

export default ThemeEditor;
