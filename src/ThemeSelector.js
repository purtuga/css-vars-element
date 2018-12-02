import {ComponentElement, prop, bind} from "@purtuga/component-element"
import {domAddEventListener} from "@purtuga/common/src/domutils/domAddEventListener"
import {parseHTML} from "@purtuga/common/src/jsutils/parseHTML"

//=============================================================
const warn = console.warn; // eslint-disable-line
const LABELS = {
    none: "None"
};
// const CLEAR = "&#10761;";
// const ARROW = "&#9660;";

/**
 * Provides a selection type of interface that allows the user to select a theme
 * from the available list.
 *
 * @extends ComponentElement
 *
 * @fires ThemeSelector#themeChange
 */
export class ThemeSelector extends ComponentElement {
    //-------------------------------------------------------------
    //
    //                                              STATIC MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC PROPERTIES ~~~~~
    static tagName = "theme-selector";

    willRender() {
        if (this._setupDone) {
            return false;
        }
    }

    render() {
        return `
<style>
    :host {
        display: inline-block;
        position: relative;
        cursor: pointer;
        box-sizing: border-box;
        font-family: var(--theme-font-family, verdana);
        border: var(--theme-border, 1px solid #8A8A8A);
        padding: var(--theme-spacing-1, 0.25rem) var(--theme-spacing-1, 0.5rem);
        width: 15ch;
    }
    .none {
        color: var(--theme-color-5, lightgrey);
    }
    .selected {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .choices {
        display: none;
        position: absolute;
        top: calc(100% + 5px);
        left: 0;
        width: 200px;
        max-height: 200px;
        overflow-y: auto;
        padding: var(--theme-spacing-2, 0.5rem);
        background-color: var(--theme-color-bg, white);
        color: var(--theme-color-fg, black);
        border: var(--theme-border, 1px solid #8A8A8A);
        box-shadow: var(--theme-box-shadow);
        z-index: 1;
    }
    .show {
        display: block;
    }
    .theme {
        cursor: pointer;
        margin-bottom: var(--theme-spacing-2, 0.5em);
        border: 3px solid var(--theme-color-1, #ECECEC);
    }
    .theme:last-child {
        margin-bottom: 0;
    }
    .theme:hover {
        border-color: var(--theme-color-accent-info-4, #00659c);
    }
    .theme-colors {
        display: flex;
        flex-direction: row-reverse;
    }
    .theme-colors > div {
        width: 1em;
        height: 1em;
        margin-left: 2px;
    }
</style>
<div class="selected"></div>
<div class="choices"></div>`;
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STATIC METHODS ~~~~~



    //-------------------------------------------------------------
    //
    //                                            INSTANCE MEMBERS
    //
    //-------------------------------------------------------------

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  PROPS AND ATTRIBUTES  ~~~~

    /**
     * The list of available themes. Each theme entry must be an object with
     * a `title` attribute and a `theme`  attribute.
     *
     * @type {Array<Object>}
     */
    @prop
    get choices() {
        return null;
    }

    /**
     * The current selected theme
     *
     * @type {Object}
     */
    @prop
    get value() {
        return null;
    }
    set value(newTheme) {
        if ("object" !== typeof newTheme) {
            warn(new TypeError(`value must be an object (got ${typeof  newTheme}`));
            return this.props.value;
        }
        return newTheme;
    }

    @prop
    get labels() {
        return LABELS;
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  LIFE CYCLE HOOKS  ~~~~~
    // Called from constructor
    // init() {}

    // Called when all required `props` have been provided
    didRender() {
        if (!this._setupDone) {
            this._setupDone = true;

            this._state = {
                docEvListener: null,
                $selectedEle: this.$("div.selected"),
                $choicesEle: this.$("div.choices"),
                $none: document.createElement("div")
            };

            this._state.$none.textContent = this.labels.none;
            this._state.$none.classList.add("none");
            this._state.$selectedEle.innerText = this.props.labels.none;

            // domAddEventListener(this, "click", this);
            domAddEventListener(this.$ui, "click", this);
            this.onPropsChange(this._renderChoices, "choices");
            this.onPropsChange(this._handleValueChanges, "value");

            this._handleValueChanges();
            this._renderChoices();
        }
    }

    // called when element is removed from dom
    didUnmount() {
        this._removeGlobalEventListeners();
    }


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    /**
     * Hides the choices menu
     */
    hideChoices() {
        if (this._setupDone) {
            this._state.$choicesEle.classList.remove("show");
        }
    }

    @bind
    handleEvent(ev) {
        if (this._setupDone) {
            if (ev.type === "click") {
                // If click was from somwhere inside the choice menu - handle it
                if (isClickFromChoicesMenu(ev, this)) {
                    const themeEle = (ev.path && ev.path[0]
                        ? ev.path[0]
                        : ev.target).closest(".theme");

                    if (themeEle) {
                        this._removeGlobalEventListeners();
                        this.hideChoices();
                        this.value = this.choices[themeEle.dataset.theme];

                        /**
                         * Theme has changed
                         * @event ThemeSelector#themeChange
                         * @extends CustomEvent
                         * @type {CustomEvent}
                         */
                        this.emit("themeChange", this.value);
                    }
                } else {
                    this._state.$choicesEle.classList.toggle("show");

                    if (this._state.$choicesEle.classList.contains("show") && !this._state.docEvListener) {
                        setTimeout(() => {
                            this._state.docEvListener = domAddEventListener(document, "click", this._handleAutoMenuClose);
                        }, 1);
                    } else {
                        this._removeGlobalEventListeners();
                    }
                }
            }
        }
    }

    @bind
    _renderChoices() {
        if (this._setupDone) {
            const $choicesEle = this._state.$choicesEle;

            $choicesEle.textContent = "";

            if (!Array.isArray(this.props.choices) || !this.props.choices.length) {
                $choicesEle.appendChild(this._state.$none);
            } else {
                $choicesEle.appendChild(
                    this.props.choices.reduce(buildThemeChoices, document.createDocumentFragment())
                );
            }
        }
    }

    @bind
    _handleAutoMenuClose(ev) {
        if (!isClickFromChoicesMenu(ev, this)) {
            this.hideChoices();
            this._removeGlobalEventListeners();
        }
    }

    _removeGlobalEventListeners() {
        if (this._state && this._state.docEvListener) {
            this._state.docEvListener.remove();
            this._state.docEvListener = null;
        }
    }

    @bind
    _handleValueChanges() {
        this._state.$selectedEle.textContent = this.value ? this.value.title : this.labels.none;
    }
}

function buildThemeChoices(allChoiceDocFrag, theme, index) {
    allChoiceDocFrag.appendChild(getChoiceElementForTheme(theme, index));
    return allChoiceDocFrag;
}

function getChoiceElementForTheme(theme, themeId) {

    const themeShowcase = parseHTML(`
<div class="theme" data-theme="${String(themeId) || theme.title}">
    <css-vars>
        <div style="padding: 0.5em;background-color: var(--theme-color-bg); color: var(--theme-color-fg); font-family: var(--theme-font-family);">
            <div>${ theme.title || "??"}</div>
            <div class="theme-colors">
                <div style="background-color: var(--theme-color-msg-success-bg);"></div>
                <div style="background-color: var(--theme-color-msg-alert-bg);"></div>
                <div style="background-color: var(--theme-color-msg-warning-bg);"></div>
                <div style="background-color: var(--theme-color-msg-info-bg);"></div>
                <div style="background-color: var(--theme-color-msg-error-bg);"></div>
            </div>
        </div>
    </css-vars>
</div>
`);

    themeShowcase.querySelector("css-vars").vars = theme.theme;
    return themeShowcase;
}

function isClickFromChoicesMenu(ev, inst) {
    // If click was from somwhere inside the choice menu - handle it
    return (ev.path && ev.path[0]
        ? ev.path[0]
        : ev.target).closest(".choices") === inst._state.$choicesEle;
}

export default ThemeSelector;
