import * as Util from "/core/util.js";
import {Slide} from "../cmn/slide.js";

(async function() {
    /* app */
    const app = document.getElementById("home");
    
    /* main slide */
    const mainSlide = document.createElement("div");
    mainSlide.style.cssText = `
        width: 100%;
        height : 300px;
        background-color: var(--main-color-01);
        margin-bottom: 60px;
    `;

    app.appendChild(mainSlide);

    /* search data */
    const categorys = await Util.Core.sendHttpRequest("data/categorys.json");
    const contents = await Util.Core.sendHttpRequest("data/contents.json");

    /* sub slide */
    categorys.forEach(element => {
        const categoryName = element.codeName;
        const categoryCode = element.code;
        const content = contents[categoryCode];
        
        const slide = new Slide(categoryCode, categoryName, content);
        slide.createSlide();
        slide.render("home"); 
    });

})();