import {ComponentElement} from "component-element"

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
    --theme-color-dark: #212529;
    --theme-color-dark-text: #fff;

    --theme-color-medium: #adb5bd;
    --theme-color-medium-text: #ffff;

    --theme-color-light: transparent;
    --theme-color-light-text: #000;

    /* == components == */
    --theme-color-success-bg: #28a745;
    --theme-color-success-text: #fff;

    --theme-color-warning-bg: #ffc107;
    --theme-color-warning-text: #000;

    --theme-color-info-bg: #17a2b8;
    --theme-color-info-text: #fff;

    --theme-color-error-bg: #dc3545;
    --theme-color-error-text: #fff;

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
    --theme-border-color: var(--theme-color-dark-text);
    --then-border-radius: 3px;

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
}
</style>
<slot></slot>`;
    }
}

export default ThemePicker;
