import {showcase} from "project-showcase"
import "./colors-showcase"
import "./events-showcase"

// import other showcases now so that they register themselves.

//========================================================

showcase("About", function ($content) {
    $content.innerHTML = `
<h2>theme-picker-element</h2>
<p>Element that allows control of theming css variables</p>
<p>
    <strong>License:</strong> MIT<br>
    <strong>Author:</strong> Paul Tavares<br>
</p>
`;
});

