import {showcase} from "project-showcase";
import {menuGroupTitles} from "./common";
import {ThemeEditor} from "../src/ThemeEditor";

ThemeEditor.define();

showcase({ name: "Theme Editor", group: menuGroupTitles.editor}, function ($content) {
    $content.innerHTML = `
<theme-editor></theme-editor>
`;

});