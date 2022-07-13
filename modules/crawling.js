const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const fs = require("fs");

const emotionList = ["default", "happy", "sad", "angry", "pain", "body", "power", "shy", "lonely"];

async function getHTML() {
    try {
        return await axios({
            url : "http://pulchrus.byus.net/feel/feel02.htm",
            method : "GET",
            responseType : "arraybuffer"
        });
    } catch(error) {
        console.log(error);
    }
}

getHTML().then(html => {
    return iconv.decode(html.data, "EUC-KR").toString();
}).then(data => {
    let result = [];
    const $ = cheerio.load(data);
    const $titleList = $("tbody");

    $titleList.each(function(i) {
        let emotion = emotionList[i];

        let $emotionList = $(this).children("tr"); 
        $emotionList.each(function() {
            let $textList = $(this).children("td");
            $textList.each(function() {
                let text = $(this).find("p[class=HStyle1]").text();
                
                if(text != String.fromCharCode(160)) {
                    text = "#" + text;
                    result.push({
                        "text" : text,
                        "type" : emotion
                    });
                }
            });
        });
    });
    
    return result;
}).then(result => {
    fs.writeFileSync("keyword.json", JSON.stringify(result));
});