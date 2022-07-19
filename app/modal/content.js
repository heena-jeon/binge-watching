import * as Util from "/core/util.js";

(async function() {
    /* app */
    const app = document.getElementById("content");
    app.style.backgroundColor = "black";
    
    /* container */
    const container = document.createElement("div");
    container.style.margin = "10px 20px";
    app.appendChild(container);
    
    /* title */
    const title = document.createElement("h1");
    title.innerText = "컨텐츠";
    title.style.color = "var(--main-color-03)";
    container.appendChild(title);

    const emotionList = ["default", "happy", "sad", "angry", "pain", "body", "power", "shy", "lonely"];
    const emotion = emotionList[Math.floor(Math.random() * emotionList.length)];
    const customKeyWeight = function(keywords) {
        var result = [];
        keywords.forEach(element => {
            if(element.type == emotion) {
                var data = {
                    "text" : element.text,
                    "weight" : Math.floor(Math.random() * 11),
                    "handlers" : {
                        click: function() {
                            alert(element.text);
                        }
                    }
                };
                result.push(data);
            }
        });
        return result;
    };

    const showWordCloud = function(data) {
        $("#comments").jQCloud(data, {
            delay: 5
        });
    };

    const data = await Util.Core.sendHttpRequest("data/keyword.json");
    const customData = customKeyWeight(data);

    const comments = document.createElement("div");
    comments.setAttribute("id", "comments");
    comments.setAttribute("class", "modal-content");
    container.appendChild(comments);
    
    showWordCloud(customData);
})();