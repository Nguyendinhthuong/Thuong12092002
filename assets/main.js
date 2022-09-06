// show/hide menu
const menu = document.querySelector(".header_message-list");
// const menuBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");
var opmn=document.getElementById("opmn").onclick=function opmn(){
    menu.style.display = "flex";
    console.log("open menu");
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
};;
var menuBtn=document.getElementById("open-menu");


// opmn.addEventListener('click', () => {
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     menuBtn.style.display = "none";
// });

// close menu
const closediv = () => {
    menu.style.display = "none";
    closeBtn.style.display ="none";
    menuBtn.style.display = "inline-block";
}

// closeBtn.addEventListener('click', closediv)
