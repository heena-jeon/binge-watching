import * as Util from "/core/util.js";

/**
 * 슬라이드
 */
export class Slide {
    /**
     * 
     * @param {String} id 슬라이드 ID
     * @param {String} title 슬라이드 타이틀
     * @param {Array} contents 슬라이드 컨텐츠
     */
    constructor(id, title, contents) {
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.slide = null;
    }

    /**
     * 슬라이드를 만듭니다.
     */
    createSlide() {
        const slide = SlideView.createSlide("slide-container");
        const title = SlideView.createTitle("slide-title", this.title);
        const itemWrap = SlideView.createItemWrap("slide-wrapper");

        SlideView.render(slide, title);
        SlideView.render(slide, itemWrap);

        this.contents.forEach(content => {
            let item = SlideView.createItem(content.title, content.link, content.type);
            itemWrap.appendChild(item);
        });

        this.slide = slide;
    }

    /**
     * 
     * @param {String} id
     */
    render(id) {
        const parent = document.getElementById(id);
        parent.appendChild(this.slide);
    }


    
}

const SlideView = {
    /**
     * 
     * @param {Element} parent 
     * @param {Element} child 
     */
    render : function(parent, child) {
        parent.appendChild(child);
    },

    createSlide : function(className) {
        const slide = document.createElement("div");
        slide.setAttribute("class", className);
        return slide;
    },

    createTitle : function(className, title) {
        const titleWrap = document.createElement("div");
        titleWrap.setAttribute("class", className);

        const titleText = document.createElement("h1");
        titleText.innerText = title;

        titleWrap.appendChild(titleText);
        
        return titleWrap;
    },

    createItemWrap : function (className) {
        const slideWrap = document.createElement("div");
        slideWrap.setAttribute("class", className);
        return slideWrap;
    },

    createItem : function (title, link, type) {
        const slideItem = document.createElement("div");
        slideItem.setAttribute("class", "slide-item")

        const item = document.createElement("button");
        item.setAttribute("type", "button");
        item.addEventListener("click", e => {
            if(!Util.Modal.find("content")) {
                const modal = Util.Modal.create("content", 700, 600);
                Util.Modal.register("content", modal);
                Util.Modal.load("app/modal/content.js");
                Util.Modal.show("content");
            }
            Util.Modal.show("content");
        });

        const itemImage = document.createElement("img");
        itemImage.setAttribute("class", "thumnail");
        itemImage.setAttribute("src", link);
        
        item.appendChild(itemImage);

        const itemTitle = document.createElement("h2");
        itemTitle.innerText = title;

        slideItem.appendChild(item);
        slideItem.appendChild(itemTitle);

        return slideItem;
    }
}