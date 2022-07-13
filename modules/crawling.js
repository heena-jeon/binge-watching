const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const fs = require("fs");

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
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
    const $keyword = $("td").children("p[class=HStyle1]");
    $keyword.each(function() {
        result.push({
            "text": $(this).text()
        });
    });
    return result;
}).then(result => {
    fs.writeFileSync("keyword.json", JSON.stringify(result));
});