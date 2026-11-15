const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("message");
const errorDisp = document.querySelector("error-field");
const warnDisp = document.querySelector("warning-field");
const form = document.querySelector("form");
const nameErr = document.getElementById("name-err");
const emailErr = document.getElementById("email-err");
const msgErr = document.getElementById("msg-err");
const nameWarn = document.getElementById("name-warn");
const emailWarn = document.getElementById("email-warn");
const msgWarn = document.getElementById("msg-warn");
let nameErrorPresent = false;
let emailErrorPresent = false;
let msgErrorPresent = false;

let form_errors = [];

nameInput.addEventListener("input", () => {
    const characterCt = document.getElementById("name-char-ct")
    let characterLength = nameInput.value.trim().length;

    if (characterLength < nameInput.minLength){
        nameInput.setCustomValidity(`Please enter a name longer than ${nameInput.minLength} character.`);
    
    } else if (characterLength > nameInput.maxLength - 10 && characterLength < nameInput.maxLength){
    warnDisp.style.display = "block";
    nameWarn.textContent = "Approaching character limit.";

    } else if (characterLength >= nameInput.maxLength) {
        warnDisp.style.display = "block";
        nameWarn.textContent = `Max character limit is ${nameInput.maxLength}.`;

    } else {
        nameInput.setCustomValidity("");
        warnDisp.style.display = "none";
    }

    characterCt.innerHTML = `${characterLength}/100`
})

nameInput.addEventListener("blur", () => {
    warnDisp.style.display = "none"

    if(!nameInput.checkValidity()){
        if (nameInput.value.trim().length < 1) {
            nameInput.setCustomValidity("Please enter a name longer than 1 character.");
            nameInput.classList.add("not-valid");
        }

        nameErrorPresent = true;
        nameErr.textContent = nameInput.validationMessage;
        errorDisp.style.display = "block";
        nameErr.style.display = "block";
        nameErr.setAttribute('aria-invalid', 'true');
    } else {
        nameErr.style.display = "none";
        nameErrorPresent = false;
        nameInput.classList.remove("not-valid");
        nameErr.setAttribute('aria-invalid', 'false');
    }

    if(!(nameErrorPresent || emailErrorPresent || msgErrorPresent)){
        errorDisp.style.display = "none"
    }
})

emailInput.addEventListener("input", () => {
    const characterCt = document.getElementById("email-char-ct")
    let characterLength = emailInput.value.trim().length;

    if (characterLength < emailInput.minLength){
        emailInput.setCustomValidity(`Please enter an email longer than ${minLength} character.`);
    
    } else if (characterLength > emailInput.maxLength - 10 && characterLength < emailInput.maxLength){
        warnDisp.style.display = "block";
        emailWarn.textContent = "Approaching character limit.";

    } else if (characterLength >= emailInput.maxLength) {
        warnDisp.style.display = "block";
        emailWarn.textContent = `Max character limit is ${emailInput.maxLength}.`;

    } else {
        emailInput.setCustomValidity("");
        warnDisp.style.display = "none";

    }

    characterCt.textContent = `${characterLength}/100`
})

emailInput.addEventListener("blur", () => {
    warnDisp.style.display = "none"


    if(!emailInput.checkValidity()){
        if (emailInput.value.trim().length < 1) {
            emailInput.setCustomValidity("Please enter an email longer than 1 character.");
            emailInput.classList.add("not-valid");
        }

        emailErrorPresent = true;
        emailErr.textContent = emailInput.validationMessage;
        errorDisp.style.display = "block";
        emailErr.style.display = "block";
        emailErr.setAttribute('aria-invalid', 'true');
    } else {
        emailErr.style.display = "none";
        emailErrorPresent = false;
        emailInput.classList.remove("not-valid");
        emailErr.setAttribute('aria-invalid', 'false');
    }

    if(!(nameErrorPresent || emailErrorPresent || msgErrorPresent)){
        errorDisp.style.display = "none"
    }
})

msgInput.addEventListener("input", () => {
    const characterCt = document.getElementById("msg-char-ct")
    let characterLength = msgInput.value.trim().length;

    if (characterLength < msgInput.minLength){
        msgInput.setCustomValidity(`Please enter a message longer than ${msgInput.minLength} characters.`);
        warnDisp.style.display = "none";

    } else if (characterLength > msgInput.maxLength - 50 && characterLength < msgInput.maxLength){
        warnDisp.style.display = "block";
        msgWarn.textContent = "Approaching character limit.";

    } else if (characterLength >= msgInput.maxLength) {
        warnDisp.style.display = "block";
        msgWarn.textContent = `Max character limit is ${msgInput.maxLength}.`;

    } else {
        msgInput.setCustomValidity("");
        warnDisp.style.display = "none";

    }
    characterCt.textContent = `${characterLength}/1000`
})

msgInput.addEventListener("blur", () => {
    warnDisp.style.display = "none"

    if(!msgInput.checkValidity()){
        if (msgInput.value.trim().length < 1) {
            msgInput.setCustomValidity("Please enter a message longer than 10 characters.");
            msgInput.classList.add("not-valid");
        } 

        msgErrorPresent = true;
        msgErr.textContent = msgInput.validationMessage;
        errorDisp.style.display = "block";
        msgErr.style.display = "block";
        msgErr.setAttribute('aria-invalid', 'true');
    } else {
        msgErr.style.display = "none";
        msgErrorPresent = false;
        msgInput.classList.remove("not-valid");
        msgErr.setAttribute('aria-invalid', 'false');
    }

    if(!(nameErrorPresent || emailErrorPresent || msgErrorPresent)){
        errorDisp.style.display = "none"

    }
})