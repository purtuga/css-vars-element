import {showcase} from "project-showcase"
import {menuGroupTitles} from "./common";

// import other showcases now so that they register themselves.

//========================================================

showcase({ name: "Listen: set-theme", group: menuGroupTitles.events }, function ($content) {
    $content.innerHTML = `
<css-vars>
    <a href="javascript:void(0);">Emit</a>
    <div></div>
</css-vars>
`;
    const $a = $content.querySelector("a");
    // const $div = $content.querySelector("div");

    $a.addEventListener("click", function() {
        const newEv = new CustomEvent("set-theme", {detail: {}, bubbles: true});
        this.dispatchEvent(newEv);
    })
});
