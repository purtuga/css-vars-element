import {showcase} from "@purtuga/project-showcase";
import {menuGroupTitles} from "./common";
import {ThemeEditor} from "../src/ThemeEditor";

ThemeEditor.define();

showcase({ name: "Theme Editor", group: menuGroupTitles.other}, function ($content) {
    $content.innerHTML = `
<theme-editor></theme-editor>
`;

});