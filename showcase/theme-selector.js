import {showcase} from "@purtuga/project-showcase";
import {menuGroupTitles} from "./common";
import {ThemeSelector} from "../src/ThemeSelector";
import {varsDefault} from "../src/vars-default";
import {varsDark} from "../src/themes/dark";

ThemeSelector.define();

showcase({ name: "Theme Selector", group: menuGroupTitles.other}, function ($content) {
    $content.innerHTML = `
<h2>Outside of <code>css-vars</code> element - No Choices</h2>
<theme-selector id="one"></theme-selector>

<css-vars>
<h2>Inside of a <code>css-vars</code> Element - No Choices</h2>
<theme-selector id="two"></theme-selector>
</css-vars>

<hr>

<h2>Outside of <code>css-vars</code> element - With Choices</h2>
<theme-selector id="three"></theme-selector>

<css-vars>
    <div style="
            background-color: var(--theme-color-bg); 
            color: var(--theme-color-fg); 
            padding: var(--theme-spacing-8) var(--theme-spacing-3);
        ">
        <h2>Inside of a <code>css-vars</code> Element - With Choices</h2>
        <theme-selector id="four"></theme-selector>
    </div>
</css-vars>

<hr>

`;

    $content.querySelector("#three").choices = [
        {
            title: "Default",
            theme: Object.assign({}, varsDefault)
        },
        {
            title: "Dark",
            theme: Object.assign({}, varsDark)
        }
    ];
    $content.querySelector("#four").choices = [
        {
            title: "Default",
            theme: Object.assign({}, varsDefault)
        },
        {
            title: "Dark",
            theme: Object.assign({}, varsDark)
        }
    ];

});