const menu = document.querySelector(".menu");
const openMenubtn = document.querySelector(".open-menu");
const closeMenubtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu-opened");
}

openMenubtn.addEventListener("click", toggleMenu);
closeMenubtn.addEventListener("click", toggleMenu);