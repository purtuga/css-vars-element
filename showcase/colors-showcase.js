import {showcase} from "project-showcase"

// import other showcases now so that they register themselves.

//========================================================
const getColorHtml = cssVarName => `<span style="border:1px solid lightgrey;display:inline-block;width:20px;height:20px;vertical-align:middle;background: var(${cssVarName})"></span><code>${cssVarName}</code>`;


showcase("Base Colors", function ($content) {
    const $themePicker = document.createElement("css-vars");
    $themePicker.setAttribute("style", "display:grid; grid:auto / repeat(4, 1fr);grid-gap:2em;");
    $content.appendChild($themePicker);

    const allThemCssVars = $themePicker.getVarNames();
    let $div;
    let isMatch;

    // Colors  ----------------------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Primary Colors</h3>`;
    isMatch = /-color-\d+/
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = getColorHtml(cssVarName);
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;


    // Colors - accent: info---------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Secondary: Accent - Info</h3>`;
    isMatch = /-color-accent-info-\d+/
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = getColorHtml(cssVarName);
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;

    // Colors - accent: success ----------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Secondary: Accent - Success</h3>`;
    isMatch = /-color-accent-success-\d+/
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = getColorHtml(cssVarName);
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;

    // Colors - accent: warning ----------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Secondary: Accent - Alert</h3>`;
    isMatch = /-color-accent-alert-\d+/
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = getColorHtml(cssVarName);
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;

    // Colors - accent: warning ----------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Secondary: Accent - Warning</h3>`;
    isMatch = /-color-accent-warning-\d+/
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = getColorHtml(cssVarName);
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;


    // Colors - accent: Error ----------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `<h3>Secondary: Accent - error</h3>`;
    isMatch = /-color-accent-error-\d+/
    allThemCssVars.forEach(cssVarName => {
        if (isMatch.test(cssVarName)) {
            const $p = document.createElement("p");
            $p.innerHTML = getColorHtml(cssVarName);
            $div.appendChild($p);
        }
    });
    $themePicker.appendChild($div);
    $div = null;


    // ELEMENTS colors    -----------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `
<p>${getColorHtml("--theme-color-bg")}</p>
<p>${getColorHtml("--theme-color-fg")}</p>
<p>${getColorHtml("--theme-color-link")}</p>
<hr>
<p style="background:var(--theme-color-bg);color:var(--theme-color-fg)">Lerem ipsum</p>
<p><a href="javascript:void(0);" style="color:var(--theme-color-link)">Lorem ipsum</a></p>
`;
    $themePicker.appendChild($div);
    $div = null;

});



showcase("Colored Messages", function ($content){
    const $themePicker = document.createElement("css-vars");
    $themePicker.setAttribute("style", "display:grid; grid:auto / repeat(4, 1fr);grid-gap:2em;");
    $content.appendChild($themePicker);

    let $div;

    // MESSAGE: SUCCESS + WARNING------------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `
<h3>Success</h3>
<p>${getColorHtml("--theme-color-msg-success-bg")}</p>
<p>${getColorHtml("--theme-color-msg-success-fg")}</p>
<p style="padding: 0.5em;background:var(--theme-color-msg-success-bg);color:var(--theme-color-msg-success-fg)">Lerem ipsum</p>
`;
    $themePicker.appendChild($div);
    $div = null;



    $div = document.createElement("div");
    $div.innerHTML = `
<h3>Alert</h3>
<p>${getColorHtml("--theme-color-msg-alert-bg")}</p>
<p>${getColorHtml("--theme-color-msg-alert-fg")}</p>
<p style="padding: 0.5em;background:var(--theme-color-msg-alert-bg);color:var(--theme-color-msg-alert-fg)">Lerem ipsum</p>
`;
    $themePicker.appendChild($div);
    $div = null;


    $div = document.createElement("div");
    $div.innerHTML = `
<h3>Warning</h3>
<p>${getColorHtml("--theme-color-msg-warning-bg")}</p>
<p>${getColorHtml("--theme-color-msg-warning-fg")}</p>
<p style="padding: 0.5em;background:var(--theme-color-msg-warning-bg);color:var(--theme-color-msg-warning-fg)">Lerem ipsum</p>
`;
    $themePicker.appendChild($div);
    $div = null;


    // MESSAGE: INFO + ERROR ------------------------------------------------------
    $div = document.createElement("div");
    $div.innerHTML = `
<h3>Informational</h3>
<p>${getColorHtml("--theme-color-msg-info-bg")}</p>
<p>${getColorHtml("--theme-color-msg-info-fg")}</p>
<p style="padding: 0.5em;background:var(--theme-color-msg-info-bg);color:var(--theme-color-msg-info-fg)">Lerem ipsum</p>
`;
    $themePicker.appendChild($div);
    $div = null;

    $div = document.createElement("div");
    $div.innerHTML = `
<h3>Error</h3>
<p>${getColorHtml("--theme-color-msg-error-bg")}</p>
<p>${getColorHtml("--theme-color-msg-error-fg")}</p>
<p style="padding: 0.5em;background:var(--theme-color-msg-error-bg);color:var(--theme-color-msg-error-fg)">Lerem ipsum</p>
`;
    $themePicker.appendChild($div);
    $div = null;



});



