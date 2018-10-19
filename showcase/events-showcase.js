import {showcase} from "project-showcase"
import {menuGroupTitles} from "./common";

// import other showcases now so that they register themselves.

//========================================================

showcase({name: "Listen: themeChange", group: menuGroupTitles.props}, function ($content) {
    $content.innerHTML = `
<css-vars>
    <div style="background-color: var(--theme-color-bg); color: var(--theme-color-fg); padding: 4em; transition: all 0.5s; border: 1px solid">
        Content goes here.
    </div>
    <a style="display: block; margin-top: 2em;" href="javascript:void(0);">Emit</a>
</css-vars>
`;
    const $a = $content.querySelector("a");
    let state = false;
    let colorNum = {
        "true": ["#ffffff", "#000000"],
        "false": ["#000000", "#ffffff"]
    };

    $a.addEventListener("click", function () {
        const newEv = new CustomEvent("themeChange", {
            detail: {
                theme: {
                    "--theme-color-bg": `${ colorNum[state][0] }`,
                    "--theme-color-fg": `${ colorNum[state][1] }`
                }
            }, bubbles: true
        });
        this.dispatchEvent(newEv);
        state = !state;
    })
});
