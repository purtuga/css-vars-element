import {showcase} from "@purtuga/project-showcase"
import {menuGroupTitles} from "./common";
// import other showcases now so that they register themselves.

//========================================================

showcase({name: "Prop: target", group: menuGroupTitles.props}, function ($content) {
    $content.innerHTML = `
<h3>Target set as string <code>:root</code></h3>
<p>Should insert <code>STYLE</code> element into <code>HEAD</code></p>
<css-vars target=":root"></css-vars>

<h3>Target set to <code>body</code> string</h3>
<css-vars target="body"></css-vars>

<h3>Target set to Element object (not string</h3>
<css-vars id="three"></css-vars>
<div id="three-set">Vars set on this <code>div</code></div>

<h3>Target set to a <code>STYLE</code> element</h3>
<p>A <code>STYLE</code> element was added to <code>HEAD</code> with an attribute of "custom-vars-target"</p>
<css-vars id="four"></css-vars>

`;

    $content.querySelector("#three").target = $content.querySelector("#three-set");

    const $style = document.createElement("style");
    $style.type = "text/css";
    $style.appendChild(document.createTextNode(""));
    $style.setAttribute("custom-vars-target", "");
    document.head.appendChild($style);

    $content.querySelector("#four").target = $style;
});
