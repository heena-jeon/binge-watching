import * as Util from "/core/util.js";



const ModalView = {
    createModal : function(id) {
        const modal = document.createElement("div");
        modal.setAttribute("id", id);
        modal.setAttribute("class", "modal");
        return modal;
    },

    createHeader : function() {
        const header = document.createElement("div");
        
        return header;
    },

    createContainer : function() {
        const container = document.createElement("div");

        return container;
    },

    createCloseButton : function() {
        const btnClose = document.createElement("button");
        btnClose.setAttribute("type", "button");
        btnClose.setAttribute("class", "modal-close");
        btnClose.addEventListener("click", function(e) {
            alert("!!!");
        });
        return btnClose;
    },

    createContainer : function() {
        const container = document.createElement("div");
        container.setAttribute("class", "modal-container");
        return container;
    },

    createTitle : function(title, description) {
        const titleWrap = document.createElement("div");
        titleWrap.setAttribute("class", "modal-title");

        const titleText = document.createElement("h2");
        titleText.innerText = title;

        const titleDescription = document.createElement("span");
        titleDescription.innerText = description;

        titleWrap.appendChild(titleText);
        titleWrap.appendChild(titleDescription);
        
        return titleWrap;
    },

    createComments : function() {
        const comments = document.createElement("div");
        comments.setAttribute("id", "comments");
        comments.setAttribute("class", "modal-content");
        return comments;
    }
}