"use strict"
let btn = document.querySelector("#btn");
let FirstIcon = document.getElementById("First-icon");
let NewIcon1 = document.getElementsByClassName("icon-1")
let Form = document.querySelector("#myForm");
let LastIcon = document.querySelector("#Last-icon");
let EmailIcon = document.querySelector("#Email-icon");
let PasswordIcon = document.querySelector("#Password-icon");
let ErroFirst = document.querySelector("#First");
let ErroLast = document.querySelector("#Last");
let ErroEmail = document.querySelector("#Email");
let ErroPassword = document.querySelector("#Password");

// STATEMENTS
function getName(e) {
    e.preventDefault();
    let img = document.getElementsByTagName("img")[0];
    let InputIcon1  = 'assets/icon-error.svg';
    if(FirstIcon.value === ""){
        console.log("EMpty");
        document.getElementsByTagName('input')[0].style.borderColor = 'red';
        img.setAttribute("src",InputIcon1);
        `${ErroFirst.innerHTML ="First Name Can Not be empty"}`
    }else{
        console.log("Not EMpty");
        document.getElementsByTagName('input')[0].style.borderColor = '';
        img.setAttribute("src", "");
        `${ErroFirst.textContent = ""}`
    }
}
Form.addEventListener("submit", getName);
function getName1(e) {
    e.preventDefault();
    let Aimg = document.getElementsByTagName("img")[1];
    let InputIcon2 = "assets/icon-error.svg";
    if(LastIcon.value === ""){
        console.log("EMpty");
                document.getElementsByTagName('input')[1].style.borderColor = 'red';
        Aimg.setAttribute("src", InputIcon2);
        `${ErroLast.innerHTML ="Last Name Can Not be empty"}`
    }else{
        console.log("Not EMpty");
                document.getElementsByTagName('input')[1].style.borderColor = '';
        Aimg.setAttribute("src", "");
        `${ErroLast.textContent = ""}`
        
    }
}
Form.addEventListener("submit", getName1);
function getName2(e) {
    e.preventDefault();
    let Eimg = document.getElementsByTagName("img")[2];
    let InputIcon3 = "assets/icon-error.svg";
    if(EmailIcon.value === ""){
        console.log("EMpty");
                document.getElementsByTagName('input')[2].style.borderColor = 'red';
        Eimg.setAttribute("src", InputIcon3);
        `${ErroEmail.innerHTML ="Email Can Not be empty"}`
    }else{
        console.log("Not EMpty");
                document.getElementsByTagName('input')[2].style.borderColor = '';
        Eimg.setAttribute("src", "");
        `${ErroEmail.textContent = ""}`
        
    }
}
Form.addEventListener("submit", getName2);
function getName3(e) {
    e.preventDefault();
    let PImg = document.getElementsByTagName("img")[3];
    let InputIcon4 = "assets/icon-error.svg";
    if(PasswordIcon.value === ""){
        console.log("EMpty");
                document.getElementsByTagName('input')[3].style.borderColor = 'red';
        PImg.setAttribute("src", InputIcon4);
        `${ErroPassword.innerHTML ="Password Can Not be empty"}`
    }else{
        console.log("Not EMpty");
                document.getElementsByTagName('input')[3].style.borderColor = '';
        PImg.setAttribute("src", "");
        `${ErroPassword.textContent = ""}`
        
    }
}
Form.addEventListener("submit", getName3);