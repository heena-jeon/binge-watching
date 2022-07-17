import * as Util from "/core/util.js";

(async function() {
    const btnLogin = document.getElementById("btnLogin");
    const onBtnLoginClick = function(e) {
         const modal = Util.Modal.create("login", 400, 500);
         Util.Modal.register("login", modal);
         Util.Modal.load("app/modal/login.js");
         Util.Modal.show("login");
    };
    btnLogin.addEventListener("click", onBtnLoginClick);

    const btnSignup = document.getElementById("btnSignup");
    btnSignup.addEventListener("click", e => {
        alert("!!!");
    });

    const btnMypage = document.getElementById("btnMypage");
    btnMypage.addEventListener("click", e => {
        alert("!!!");
    });

    const btnHome = document.getElementById("btnHome");
    btnHome.addEventListener("click", e => {
        alert("!!!");
    });

    const btnCategory = document.getElementById("btnCategory");
    btnCategory.addEventListener("mouseover", e => {
        alert("##");
    });

    const btnMy = document.getElementById("btnMy");
    btnMy.addEventListener("click", e => {

    });

    const btnMainSearch = document.getElementById("btnMainSearch");
    btnMainSearch.addEventListener("click", e => {
        const modal = Util.Modal.create("mainSearch", 600, 500);
        Util.Modal.register("mainSearch", modal);
        Util.Modal.load("app/com/mainSearch.js");
        Util.Modal.show("mainSearch");
    });

    Util.Core.load("home", "app/com/home.js");
})();