import * as Util from "/core/util.js";

(async function() {
    /* app */
    const app = document.getElementById("my");
    
    /* container */
    const container = document.createElement("div");
    container.style.cssText = `
        background-color : var(--main-color-04);
        display : block;
        margin: auto auto;
    `;

    /* comment */
    const comment = document.createElement("h1");
    comment.innerText = "개발 중입니다.";
    comment.style.textAlign = "center";

    container.appendChild(comment);
    app.appendChild(container);
})();