import {showcase} from "project-showcase"


showcase("Borders and Spacing", function($content) {
    const $themePicker = document.createElement("theme-picker");
    $themePicker.setAttribute("style", "display:grid; grid:auto / repeat(4, 1fr);grid-gap:2em;");
    $content.appendChild($themePicker);

    const allThemCssVars = $themePicker.getCssVars();
    let $div;
    let isMatch;

    // Sizes  ----------------------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Box Border</h3>
<div style="
    width: 90%;
    box-sizing: border-box;
    margin: auto;
    border: var(--theme-border-width) var(--theme-border-style) var(--theme-border-color);
    border-radius: var(--theme-border-radius);
    padding: var(--theme-spacing-6);
    ">
    <p>--theme-border-width</p>
    <p>--theme-border-style</p>
    <p>--theme-border-color</p>
    <p>--theme-border-radius</p>
</div>
`;
    $themePicker.appendChild($div);
    $div = null;



    // spacing  ----------------------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Spacing</h3>`;
    isMatch = /-spacing-/;
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = `<div style="border: var(--theme-border-width) var(--theme-border-style) var(--theme-border-color);padding: var(${cssVarName});">
<div style="padding: var(--theme-spacing-1); background-color: var(--theme-color-1)">${cssVarName}</div>
</div>`;
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;


    // Sizes  ----------------------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Affects</h3>
<div style="
    width: 90%;
    box-sizing: border-box;
    padding: var(--theme-spacing-6);
    box-shadow: var(--theme-box-shadow);
    ">
    <p>--theme-box-shadow</p>
</div>
`;
    $themePicker.appendChild($div);
    $div = null;


});