function parseJSON(jsonText) {
    var data = JSON.parse(jsonText);
    return data;
}

function onBodyLoad() {
    showModal();
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if(xhttp.readyState == 4 && xhttp.status == 200) {
    //         parseJSON(this.responseText);
    //     }
    // }
    // xhttp.open("GET", "data/contents.json", true);
    // xhttp.send();
}

function showModal() {
    var modal = document.getElementById("modal");
    var modalWrap = document.getElementById("modal_wrap");

    modal.style.display = "block";
    modalWrap.style.display = "block";

    $("html").css({
        overflow: "hidden",
        height: "auto"
    });

    getComments();
}

function hideModal() {
    var modal = document.getElementById("modal");
    var modalWrap = document.getElementById("modal_wrap");

    modal.style.display = "none";
    modalWrap.style.display = "none";

    $("html").removeAttr("style");
}

function getComments() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            var keywords = parseJSON(this.responseText);
            customKeywordWeight(keywords);
        }
    }
    xhttp.open("GET", "modules/keyword.json", true);
    xhttp.send();
}

function customKeywordWeight(keywords) {
    var result = [];
    keywords.forEach(element => {
        if(element.type == "happy") {
            var data = {
                "text" : element.text,
                "weight" : Math.floor(Math.random() * 11),
                "handlers" : {
                    click: function() {
                        alert("!!!");
                    }
                }
            };
            result.push(data);
        }
    });
    showWordCloud(result);
}

function showWordCloud(data) {
    $("#comments").jQCloud(data, {
        delay: 10
    });
}