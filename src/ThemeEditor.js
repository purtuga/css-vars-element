import {ComponentElement} from "@purtuga/component-element"
import {functionBindCall, consoleError} from "@purtuga/common/src/jsutils/runtime-aliases"
import {xmlEscape} from "@purtuga/common/src/jsutils/xmlEscape"
import {TabStrip} from "../showcase/components/TabStrip";

//=============================================================
TabStrip.define("theme-tab-strip");

const appendChild = functionBindCall(HTMLElement.prototype.appendChild);
const getNewDocFragment = () => document.createDocumentFragment();
const getHeader = title => {
    const header = document.createElement("h3");
    header.textContent = title;
    return header;
};
const getSection = (title, id) => {
    const section = document.createElement("section");
    if (id) {
        section.setAttribute("id", id);
    }
    if (title) {
        appendChild(section, getHeader(title));
    }
    return section;
};
const getField = (name = "", value = "", isColor = "") => {
    const response = document.createElement("p");
    response.innerHTML = `
<label>${name}</label>
<div>
    <input type="${ isColor ? "color" : "text"}" name="${xmlEscape.escape(name)}" value="${xmlEscape.escape(value)}" />
${
    isColor
        ? `<input type="text" name="${xmlEscape.escape(name)}" value="${xmlEscape.escape(value)}" />`
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
    static tagName = "theme-editor";

    render() {
        return `
<style>
    :host {
        display: block;
        position: relative;
        box-sizing: border-box;
    }
    * {
        font-family: var(--theme-font-family, verdana);
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
    input {
        width: 100%;
        padding: 0.2em;
    }
    theme-tab-strip {
        padding-bottom: 1em;
    }
    [tab] {
        border: 1px solid #bee1f4;
        border-radius: 50%;
        width: 1.5em;
        height: 1.5em;
        line-height: 1.5em;
        padding: 0;
        text-align: center;
    }
    [tab]:hover {
        border-color: #0078d7;
    }
    [tab][selected] {
        background-color: #0078d7;
        color: beige;
    }
    
    #vars > * {
        display: none;
    }
    #vars[show="general"] > #general,
    #vars[show="primary"] > #primary,
    #vars[show="secondary"] > #secondary,
    #vars[show="messages"] > #messages, 
    #vars[show="fonts"] > #fonts,
    #vars[show="borders"] > #borders {
        display: block;
    }
    
    .download-actions {
        text-align: right;
        position: relative;
    }
    .download-actions button {
        cursor: pointer;
        border: var(--theme-border);
        background-color: var(--theme-color-accent-success-4);
        color: var(--theme-color-accent-alert-0);
        padding: var(--theme-spacing-1) var(--theme-spacing-3);
        border-radius: var(--theme-border-radius);
    }
    .download-content {
        display: none;
        position: absolute;
        right: 0;
        top: calc(100% + 5px);
        width: 100%;
    }
    .download-content .textarea-cntr {
        height: 400px;
        width: 100%;
    }
    .download-content .close-download-content,
    .close-upload-content {
        display: inline-block;
        cursor: pointer;
        margin-bottom: var(--theme-spacing-3);
    }
    .download-content textarea,
    .upload-content textarea {
        display: block;
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
    }
    .upload-button-cntr {
        display: inline-block;
        position: relative;
        margin-right: 3em;
    }
    button[name="load-json"],
    .upload-actions > button{
        background-color: var(--theme-color-1);
        border-color: var(--theme-color-2);
        color: var(--theme-color-5);
    }
    .upload-content {
        display: none;
        position: absolute;
        right: -2px;
        top: -2px;
        width: 400px;
    }
    .upload-content .textarea-cntr {
        height: 140px;
    }
    .upload-content textarea {
        border: var(--theme-border);
    }
    .upload-content .upload-actions {
        margin-top: 0.5em;
    }
    .upload-actions > button[name="load-theme-vars"] {
        border-color: var(--theme-color-6);
        color: var(--theme-color-8);
    }
</style>
<div class="container">
    <div class="vars">
        <h1>Theme CSS Vars</h1>
        <theme-tab-strip>
            <div tab title="General Colors" selected show="general">G</div>
            <div tab title="Primary Colors" show="primary">P</div>
            <div tab title="Secondary Colors" show="secondary">S</div>
            <div tab title="Messages" show="messages">M</div>
            <div tab title="Fonts" show="fonts">F</div>
            <div tab title="Borders and Spacing" show="borders">B</div>
        </theme-tab-strip>
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
                <div class="download-actions">
                    <span class="upload-button-cntr">
                        <button name="load-json">Load</button>
                        <div class="upload-content" style="
                                background-color: var(--theme-color-bg);
                                border: var(--theme-border);
                                border-color: var(--theme-color-2);
                                padding: var(--theme-spacing-5);
                                box-shadow: var(--theme-box-shadow);
                            ">
                            <a class="close-upload-content" style="color: var(--theme-color-link)">close</a>
                            <div class="textarea-cntr">
                                <textarea placeholder="Paste Theme JSON here" style="
                                    font-family: var(--theme-font-family-monospace);
                                    "></textarea>
                            </div>
                            <div class="upload-actions">
                                <button name="load-theme-vars">Load Theme Vars</button>
                            </div>
                        </div>
                    </span>
                    <button name="download-json">JSON</button>
                    <button name="download-css">CSS</button>
                    <div class="download-content" style="
                            background-color: var(--theme-color-bg);
                            border: var(--theme-border);
                            border-color: var(--theme-color-2);
                            padding: var(--theme-spacing-5);
                            box-shadow: var(--theme-box-shadow);
                        ">
                        <a class="close-download-content" style="color: var(--theme-color-link)">close</a>
                        <div class="textarea-cntr">
                            <textarea style="
                                font-family: var(--theme-font-family-monospace);
                                "></textarea>
                        </div>
                    </div>
                </div>
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


    //-------------------------------------------------------------
    //
    //                                            INSTANCE MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  PROPS AND ATTRIBUTES  ~~~~



    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    didInit() {
        this._state = {
            show: "general",
            $varsCntr: null,
            $cssVarsEle: null,
            $downloadContent: null,
            $downloadSrc: null,
            $uploadContent: null,
            $uploadSrc: null
        }
    }

    // Called when all required `props` have been provided
    didRender() {
        if (!this._setupDone) {
            this._setupDone = true;
            this._state.$downloadContent = this.$(".download-content");
            this._state.$downloadSrc = this._state.$downloadContent.querySelector("textarea");
            this._state.$uploadContent = this.$(".upload-content");
            this._state.$uploadSrc = this._state.$uploadContent.querySelector("textarea");

            customElements.whenDefined("css-vars").then(() => {
                const varsCntr = this._state.$varsCntr = this.$("#vars");
                const varNames = customElements.get("css-vars").varNames;
                const cssVarsEle = this._state.$cssVarsEle =  this.$("css-vars");
                let initialStyles = cssVarsEle.constructor.defaultVars;
                const reduceToColorFieldsDocFrag = (content, varName) => {
                    content.appendChild(getField(varName, initialStyles[varName].trim(), true));
                    return content;
                };
                const reduceToInputFieldsDocFrag = (content, varName) => {
                    content.appendChild(getField(varName, initialStyles[varName].trim()));
                    return content;
                };
                let section;
                let isMatch;

                // General Colors
                section = getSection("General Colors", "general");
                appendChild(
                    section,
                    [
                        "--theme-color-bg",
                        "--theme-color-fg",
                        "--theme-color-link"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                appendChild(varsCntr, section);
                section = null;


                // Primary Colors
                isMatch = /-color-\d+/;
                section = getSection("Primary Colors", "primary");
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                appendChild(varsCntr, section);
                section = null;
                isMatch = null;

                // Accent Colors: INFO
                section = getSection("", "secondary");
                isMatch = /-color-accent-info-\d+/;
                appendChild(section, getHeader("Secondary: Accent Info"));
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: SUCCESS
                isMatch = /-color-accent-success-\d+/;
                appendChild(section, getHeader("Secondary: Accent Success"));
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: ALERT
                isMatch = /-color-accent-alert-\d+/;
                appendChild(section, getHeader("Secondary: Accent Alert"));
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: WARNING
                isMatch = /-color-accent-warning-\d+/;
                appendChild(section, getHeader("Secondary: Accent Warning"));
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;

                // Accent Colors: ERROR
                isMatch = /-color-accent-error-\d+/;
                appendChild(section, getHeader("Secondary: Accent Error"));
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                isMatch = null;
                appendChild(varsCntr, section);
                section = null;
                isMatch = null;


                // Messages: Success
                section = getSection("", "messages");
                appendChild(section, getHeader("Colored Messages: Success"));
                appendChild(
                    section,
                    [
                        "--theme-color-msg-success-bg",
                        "--theme-color-msg-success-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Messages: Alert
                appendChild(section, getHeader("Colored Messages: Alert"));
                appendChild(
                    section,
                    [
                        "--theme-color-msg-alert-bg",
                        "--theme-color-msg-alert-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Messages: Warning
                appendChild(section, getHeader("Colored Messages: Warning"));
                appendChild(
                    section,
                    [
                        "--theme-color-msg-warning-bg",
                        "--theme-color-msg-warning-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Messages: Info
                appendChild(section, getHeader("Colored Messages: Info"));
                appendChild(
                    section,
                    [
                        "--theme-color-msg-info-bg",
                        "--theme-color-msg-info-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );

                // Messages: Error
                appendChild(section, getHeader("Colored Messages: Error"));
                appendChild(
                    section,
                    [
                        "--theme-color-msg-error-bg",
                        "--theme-color-msg-error-fg"
                    ].reduce(reduceToColorFieldsDocFrag, getNewDocFragment())
                );
                appendChild(varsCntr, section);
                section = null;

                // Fonts
                isMatch = /-font-/;
                section = getSection("Fonts", "fonts");
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToInputFieldsDocFrag, getNewDocFragment())
                );
                appendChild(varsCntr, section);
                section = null;
                isMatch = null;


                // Borders and spacing
                isMatch = /-font-/;
                section = getSection("Boarders and Spacing", "borders");
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToInputFieldsDocFrag, getNewDocFragment())
                );

                isMatch = /-spacing-/;
                appendChild(section, getHeader("Spacing"));
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToInputFieldsDocFrag, getNewDocFragment())
                );

                isMatch = /-box-shadow/;
                appendChild(section, getHeader("Box Shadow"));
                appendChild(
                    section,
                    varNames
                        .filter(varName => isMatch.test(varName))
                        .reduce(reduceToInputFieldsDocFrag, getNewDocFragment())
                );

                appendChild(varsCntr, section);
                section = null;
                isMatch = null;


                varsCntr.addEventListener("input", this);
                this.$("theme-tab-strip").addEventListener("click", this);
                varsCntr.setAttribute("show", this._state.show);
                this.$(".download-actions").addEventListener("click", this);
                this.$(".close-download-content").addEventListener("click", this);
                this.$(".close-upload-content").addEventListener("click", this);

                initialStyles = null;
            });
        }
    }

    handleEvent(ev) {
        if (ev.target.type === "text" || ev.target.type === "color") {
            if (ev.target.type === "color") {
                ev.target.parentElement.querySelector("input[type='text']").value = ev.target.value;
            }

            this._state.$cssVarsEle.style.setProperty(ev.target.name, ev.target.value);
        }

        if (ev.type === "click" && ev.currentTarget.tagName === "THEME-TAB-STRIP") {
            const selectedEle = ev.target.closest("[tab]");
            if (selectedEle && !selectedEle.hasAttribute("selected")) {
                const previouslySelected = ev.currentTarget.querySelector("[selected]");
                if (previouslySelected) {
                    previouslySelected.removeAttribute("selected");
                }
                selectedEle.setAttribute("selected", "");
                this._state.$varsCntr.setAttribute("show", selectedEle.getAttribute("show"));
            }
        }

        if (
            ev.type === "click" &&
            (
                ev.target.name === "download-json" ||
                ev.target.name === "download-css"
            )
        ) {
            const content = getDownloadContent(this, ev.target.name === "download-json" ? "json" : "text");
            this._state.$downloadSrc.value = ev.target.name === "download-json" ? JSON.stringify(content, null, 4) : content;
            this.showDownload();
        }

        if (ev.type === "click" && ev.target.name === "load-json") {
            this.showUpload();
        }

        if (
            ev.type === "click" &&
            (
                ev.target.name === "load-theme-vars" ||
                ev.target.classList.contains("close-upload-content")
            )
        ) {
            if (ev.target.name === "load-theme-vars") {
                setVarsFromJsonString(this, this._state.$uploadSrc.value);
            }
            this.hideUpload();
        }

        if (ev.type === "click" && ev.target.classList.contains("close-download-content")) {
            this.hideDownload();
        }
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    showUpload() {
        this._state.$uploadContent.style.display = "block";
    }

    hideUpload() {
        this._state.$uploadContent.style.display = "none";
    }

    showDownload() {
        this._state.$downloadContent.style.display = "block";
    }

    hideDownload() {
        this._state.$downloadContent.style.display = "none";
    }
}

function setVarsFromJsonString(inst, jsonString) {
    let themeVars;
    try {
        themeVars = JSON.parse(jsonString);
    } catch(error) {
        consoleError(error);
        return;
    }
    inst.$$("input[type='text']").forEach(input => {
        if (themeVars.hasOwnProperty(input.name)) {
            input.value = themeVars[input.name];

            if (input.previousSibling && input.previousSibling.type === "color") {
                input.previousSibling.value = themeVars[input.name];
            }

            inst._state.$cssVarsEle.style.setProperty(input.name, input.value);
        }
    });
}

function getDownloadContent(inst, type = "json") {
    const asJson = type === "json";
    let content = asJson ? {} : "";

    inst.$$("input[type='text']").forEach(input => {
        if (asJson) {
            content[input.name] = input.value;
        } else {
            content += `    ${input.name}: ${input.value};${"\n"}`
        }
    });

    if (!asJson) {
        content = `:root {
${content}
}`;
    }

    return content;
}

export default ThemeEditor;
