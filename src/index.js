import {ComponentElement} from "component-element"

//=========================================================================
let CSS_VARS;

/**
 * An element that exposes several CSS variables that can be controlled and thus affect
 * the inner elements. Use it for styling common widgets
 *
 * @listens ThemePicker#set-theme
 * @emits ThemePicker#change
 */
export class ThemePicker extends ComponentElement {
    static get tagName() {
        return "theme-picker";
    }

    static get template() {
        return `
<style>
:host {
    display: block;

    /*  ---------------------------------- *\
        COLORS
    \*  ---------------------------------- */
    /*
        All colors are normally defined starting with the lightest one
    */
    
    /* == PRIMARY COLORS == */
    --theme-color-0: rgb(255,255,255);
    --theme-color-1: rgb(200,200,200);
    --theme-color-2: rgb(175,175,175);
    --theme-color-3: rgb(150,150,150);
    --theme-color-4: rgb(125,125,125);
    --theme-color-5: rgb(100,100,100);
    --theme-color-6: rgb(75,75,75);
    --theme-color-7: rgb(50,50,50);
    --theme-color-8: rgb(25,25,25);
    --theme-color-9: rgb(0,0,0);
    
    /* == SECONDARY COLOR: info (usually in the blue color) == */
    --theme-color-accent-info-0: #def3ff;
    --theme-color-accent-info-1: #bee1f4;
    --theme-color-accent-info-2: #39a5dc;
    --theme-color-accent-info-3: #0088ce;
    --theme-color-accent-info-4: #00659c;
    

    /* == SECONDARY COLOR: success (usually in the green color) == */
    --theme-color-accent-success-0: #cfe7cd;
    --theme-color-accent-success-1: #9ecf99;
    --theme-color-accent-success-2: #6ec664;
    --theme-color-accent-success-3: #3f9c35;
    --theme-color-accent-success-4: #2d7623;


    /* == SECONDARY COLOR: alert (usually in the Yellow color) == */
    /*    https://coolors.co/fcf6e3-f9e4a4-f9d463-f9c62c-dda600     */
    --theme-color-accent-alert-0: #fcf6e3;
    --theme-color-accent-alert-1: #f9e4a4;
    --theme-color-accent-alert-2: #f9d463;
    --theme-color-accent-alert-3: #f9c62c;
    --theme-color-accent-alert-4: #dda600;
    
    /* == SECONDARY COLOR: warning (usually in the orange color) == */
    /*    https://coolors.co/ffe2af-ffc57a-ffa86b-ff8330-f4581f     */
    --theme-color-accent-warning-0: #ffe2af;
    --theme-color-accent-warning-1: #ffc57a;
    --theme-color-accent-warning-2: #ffa86b;
    --theme-color-accent-warning-3: #ff8330;
    --theme-color-accent-warning-4: #f4581f;
    
    
    /* == SECONDARY COLOR: error (usually in the error color) == */
    /*    https://coolors.co/f9caca-ff7a7a-ff4b4b-ff171a-bd1818  */
    --theme-color-accent-error-0: #F9CACA;
    --theme-color-accent-error-1: #FF7A7A;
    --theme-color-accent-error-2: #FF4B4B;
    --theme-color-accent-error-3: #FF171A;
    --theme-color-accent-error-4: #BD1818;


    /* == BACKGROUND / FORGROUND == */
    --theme-color-bg: var(--theme-color-0);
    --theme-color-fg: var(--theme-color-9);

    /* == LINKS == */
    --theme-color-link: var(--theme-color-accent-info-3);
    
    /* == MESSAGES == */
    --theme-color-msg-success-bg: var(--theme-color-accent-success-0);
    --theme-color-msg-success-fg: var(--theme-color-accent-success-4);

    --theme-color-msg-alert-bg: var(--theme-color-accent-alert-0);
    --theme-color-msg-alert-fg: var(--theme-color-accent-alert-4);
    
    --theme-color-msg-warning-bg: var(--theme-color-accent-warning-0);
    --theme-color-msg-warning-fg: var(--theme-color-accent-warning-4);

    --theme-color-msg-info-bg: var(--theme-color-accent-info-0);
    --theme-color-msg-info-fg: var(--theme-color-accent-info-4);

    --theme-color-msg-error-bg: var(--theme-color-accent-error-0);
    --theme-color-msg-error-fg: var(--theme-color-accent-error-4);

    /*  ---------------------------------- *\
        FONTS
    \*  ---------------------------------- */
    --theme-font-size-xxl: 28px;
    --theme-font-size-xl: 21px;
    --theme-font-size-l: 17px;
    --theme-font-size-m: 14px;
    --theme-font-size-s: 12px;
    --theme-font-size-xs: 11px;
    
    --theme-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --theme-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

    /*  ---------------------------------- *\
        BORDERS
    \*  ---------------------------------- */
    --theme-border-style: solid;
    --theme-border-width: 1px;
    --theme-border-color: var(--theme-color-5);
    --theme-border-radius: 3px;

    /*  ---------------------------------- *\
        SPACING and PADDING
    \*  ---------------------------------- */
    --theme-spacing-0: 0;
    --theme-spacing-1: 0.25rem;
    --theme-spacing-2: 0.5rem;
    --theme-spacing-3: 0.75rem;
    --theme-spacing-4: 1rem;
    --theme-spacing-5: 1.25rem;
    --theme-spacing-6: 1.5rem;
    --theme-spacing-7: 1.75rem;
    --theme-spacing-8: 2rem;
    
    /*  ---------------------------------- *\
        AFFECTS
    \*  ---------------------------------- */
    --theme-box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);
}
</style>
<slot></slot>`;
    }

    init() {
        /**
         *
         * @event ThemePicker#set-theme
         * @extends CustomEvent
         * @type {CustomEvent}
         */
        this.on("set-theme", this);
    }

    handleEvent(ev) {
        debugger;
    }

    /**
     * List of all CSS variables set/used by this Element
     *
     * @returns {Array}
     */
    getCssVars() {
        if (CSS_VARS) {
            return CSS_VARS.slice(0);
        }

        CSS_VARS = [];

        const findCssVars = /(--.*):/g;
        let matchArr;

        while ((matchArr = findCssVars.exec(ThemePicker.template)) !== null) {
            CSS_VARS.push(matchArr[1].trim());
        }

        return CSS_VARS.slice(0);
    }
}

export default ThemePicker;
