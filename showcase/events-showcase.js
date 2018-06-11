import {showcase} from "project-showcase"

// import other showcases now so that they register themselves.

//========================================================
const GROUP_NAME = "Events";

showcase({ name: "Listen: set-theme", group: GROUP_NAME}, function ($content) {
    $content.innerHTML = `
<theme-picker>
    <a href="javascript:void(0);">Emit</a>
    <div></div>
</theme-picker>
`;
    const $a = $content.querySelector("a");
    const $div = $content.querySelector("div");

    $a.addEventListener("click", function() {
        const newEv = new CustomEvent("set-theme", {detail: {}, bubbles: true});
        this.dispatchEvent(newEv);
    })
});
