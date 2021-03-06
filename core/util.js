/*****************************************
 * App Util
 *****************************************/
const apps = [];
export const App = {
    register : function(id, appId, app) {
        apps.push({
            "id" : id,
            "appId" : appId,
            "app" : app
        });
    },

    getApp : function(id) {
        return Common.findElement(apps, "id", id);
    }
}

/*****************************************
 * Modal Util
 *****************************************/
const modals = [];
export const Modal = {
    create : function(id, width, height) {
        const modalWrap = document.createElement("div");
        modalWrap.classList.add("modal-background");
        modalWrap.classList.add(id);
        
        const modal = document.createElement("div");
        modal.setAttribute("id", id);
        modal.setAttribute("class", "modal");
        
        modal.style.width = width + "px";
        modal.style.height = height + "px";

        const btnClose = document.createElement("button");
        btnClose.setAttribute("type", "button");
        btnClose.setAttribute("class", "modal-close");
        btnClose.addEventListener("click", e => {
            this.hide(id);
        });
        modalWrap.appendChild(modal);
        modal.appendChild(btnClose);

        return modal;
    },

    register : function(id, modal) {
        const container = document.getElementById("modalContainer");
        const modalWrap = modal.parentNode;
        container.appendChild(modalWrap);

        modals.push({
            "id": id,
            "app" : modal
        });
    },

    load : function(appId) {
        const script = document.createElement("script");
        script.setAttribute("type", "module");
        script.setAttribute("src", appId);
        document.querySelector("head").appendChild(script);
    },

    show : function(id) {
        const modal = Common.findElement(modals, "id", id);
        const container = modal.app.parentNode;
        
        container.style.display = "block";
        modal.app.style.display = "block";
    },
    
    hide : function(id) {
        const modal = Common.findElement(modals, "id", id);
        const container = modal.app.parentNode;

        container.style.display = "none";
        modal.app.style.display = "none";
    },

    find : function(id) {
        return Common.findElement(modals, id);
    }
}

/*****************************************
 * Core Util
 *****************************************/

export const Core = {
    load : function(id, appId) {
        const main = document.getElementById("main");
        const mainApp = main.children[0];

        let app = App.getApp(id) ? App.getApp(id).app : null;
        
        if(!app) {
            const script = document.createElement("script");
            script.setAttribute("type", "module");
            script.setAttribute("src", appId);
            document.querySelector("head").appendChild(script);

            app = document.createElement("div");
            app.setAttribute("id", id);

            App.register(id, appId, app);
        }
        
        if(main.children.length == 0) {
            main.appendChild(app);
        } else {
            main.replaceChild(app, mainApp);
        }
    },

    sendHttpRequest : function(requestUrl) {
        return new Promise(resolve => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if(xhttp.readyState == 4 && xhttp.status == 200) {
                    resolve(xhttp.response);
                }
            }
            xhttp.responseType = "json";
            xhttp.open("GET", requestUrl, true);
            xhttp.send();
        });
    }
}

/*****************************************
 * Common Util
 *****************************************/

export const Common = {
    parseJson : function(jsonText) {
        return JSON.parse(jsonText);
    },
    
    findElement : function(array, key, value) {
        return array.find(element => {
            return element[key] == value;
        });
    }
}

/*****************************************
 * View Util
 *****************************************/

export const View = {
    /**
     * 
     * @param {String} selector 
     * @param {Element} element 
     */
    render : function(selector, element) {
        const parent = document.querySelector(selector);
        parent.appendChild(element);
    },

    /**
     * 
     * @param {String} selector 
     * @param {Array} elements 
     */
    renderAll : function(selector, elements) {
        const parent = document.querySelector(selector);
        elements.forEach(element => {
            console.log("???", element);
            parent.appendChild(element);
        });
    }
}