import {showcase} from "@purtuga/project-showcase"
import {menuGroupTitles} from "./common";

showcase({ name: "Fonts", group: menuGroupTitles.vars }, function($content) {
    const $themePicker = document.createElement("css-vars");
    $themePicker.setAttribute("style", "display:grid; grid:auto / repeat(4, 1fr);grid-gap:2em;");
    $content.appendChild($themePicker);

    const allThemCssVars = $themePicker.getVarNames();
    let $div;
    let isMatch;

    // Sizes  ----------------------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Font Sizes</h3>`;
    isMatch = /-font-size-/;
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = `<p style="font-size: var(${cssVarName});">${cssVarName}</p>`;
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;

    // Family  ----------------------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Font Family</h3>`;
    isMatch = /-font-family/;
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = `<p style="font-family: var(${cssVarName});">${cssVarName}</p>`;
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;

});