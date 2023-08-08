let spanMenu = document.getElementById("showMenu");
let spanClose = document.getElementById("showClose");
let myDropdown = document.getElementById("myDropdown");
let subNav = document.getElementsByClassName("nav__item-has-subnav");

function toggleMenu() {
  myDropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    if (spanMenu.classList.contains("show")) {
      spanMenu.classList.remove("show");
    } else {
      spanMenu.classList.add("show");
    }
    if (spanClose.classList.contains("show")) {
      spanClose.classList.remove("show");
    } else {
      spanClose.classList.add("show");
    }
  }
};
