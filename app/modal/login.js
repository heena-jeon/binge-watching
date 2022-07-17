import * as Util from "/core/util.js";

(async function() {
    /* app */
    const app = document.getElementById("login");
    app.style.backgroundColor = "black";
    
    /* container */
    const container = document.createElement("div");
    container.style.margin = "10px 20px";
    app.appendChild(container);

    /* title */
    const title = document.createElement("h1");
    title.innerText = "로그인";
    title.style.color = "var(--main-color-03)";
    title.style.marginBottom = "40px";
    container.appendChild(title);

    /* form */
    const form = document.createElement("form");
    
    /* input id */
    const inputId = document.createElement("input");
    inputId.setAttribute("type", "text");
    inputId.setAttribute("name", "id");
    inputId.setAttribute("id", "id");
    inputId.setAttribute("placeholder", "이메일 주소 또는 아이디");
    inputId.required = true;
    inputId.style.cssText = `
        background-color: transparent;
        border: 1px solid var(--main-color-01);
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
        font-size: var(--h3-font-size);
        color: white;
        padding: 20px 10px;
    `;

    /* input password */
    const inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("name", "password");
    inputPassword.setAttribute("id", "password");
    inputPassword.setAttribute("placeholder", "비밀번호");
    inputPassword.required = true;
    inputPassword.style.cssText = `
        background-color: transparent;
        border: 1px solid var(--main-color-01);
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
        font-size: var(--h3-font-size);
        color: white;
        padding: 20px 10px;
    `;

    /* checkbox group */
    const grpCheckbox = document.createElement("ul");
    grpCheckbox.style.paddingBottom = "20px";
    
    /* checkbox save id */
    const saveIdWrap = document.createElement("li");
    saveIdWrap.style.marginBottom = "5px";

    const checkSaveId = document.createElement("input");
    checkSaveId.setAttribute("type", "checkbox");
    checkSaveId.setAttribute("id", "chkSaveId");

    const labelSaveId = document.createElement("label");
    labelSaveId.setAttribute("for", "chkSaveId");
    labelSaveId.innerText = "아이디 저장";
    labelSaveId.style.paddingLeft = "5px";
    labelSaveId.style.fontSize = "var(--h4-font-size)";

    saveIdWrap.appendChild(checkSaveId);
    saveIdWrap.appendChild(labelSaveId);

    /* checkbox auto login */
    const autoLoginWrap = document.createElement("li");
    autoLoginWrap.style.marginBottom = "5px";

    const checkAutoLogin = document.createElement("input");
    checkAutoLogin.setAttribute("type", "checkbox");
    checkSaveId.setAttribute("id", "chkAutoLogin");

    const labelAutoSave = document.createElement("label");
    labelAutoSave.setAttribute("for", "chkAutoLogin");
    labelAutoSave.innerText = "자동 로그인"
    labelAutoSave.style.paddingLeft = "5px";
    labelAutoSave.style.fontSize = "var(--h4-font-size)";

    autoLoginWrap.appendChild(checkAutoLogin);
    autoLoginWrap.appendChild(labelAutoSave);

    grpCheckbox.appendChild(saveIdWrap);
    grpCheckbox.appendChild(autoLoginWrap);

    /* button login */
    const btnLogin = document.createElement("button");
    btnLogin.setAttribute("type", "submit");
    btnLogin.innerText = "로그인";
    btnLogin.style.cssText = `
        background-color: var(--main-color-02);
        border-radius: 10px;
        color: var(--main-color-03);
        width: 100%;
        height: 50px;
        font-size: var(--h3-font-size);
        cursor: pointer;
        margin-bottom: 40px;
    `;
    
    form.appendChild(inputId);
    form.appendChild(inputPassword);
    form.appendChild(grpCheckbox);
    form.appendChild(btnLogin);
    
    container.appendChild(form);
})();