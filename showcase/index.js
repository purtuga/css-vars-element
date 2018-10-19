import {showcase, registerElements} from "project-showcase"
import "./colors-showcase"
import "./events-showcase"
import "./font-showcase"
import "./borders-and-spacing-showcase"
import "./theme-editor"
import "./theme-selector"
import "./prop-target"

// import other showcases now so that they register themselves.

//========================================================
registerElements();


showcase({name: "About", order: 1}, function ($content) {
    $content.innerHTML = `
<h2>css-vars-element</h2>
<p>Element that allows control of theming css variables</p>
<p>
    <strong>License:</strong> MIT<br>
    <strong>Author:</strong> Paul Tavares<br>
</p>
`;
});

