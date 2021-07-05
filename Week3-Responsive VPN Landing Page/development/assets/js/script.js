const menu = document.getElementById("header__menu"); 
const navEl = document.getElementById("header__nav"); 
const signEl = document.getElementById("header__sign"); 

menu.addEventListener("click", () => {
    navEl.classList.toggle("show");
    signEl.classList.toggle("show");
});