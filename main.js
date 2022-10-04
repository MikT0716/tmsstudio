var hamburger = document.querySelector(".navbar-toggler");
var navbar = document.querySelector(".navbar");
var nava = document.querySelector(".container-fluid > a");

function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("nonscrolled");
        nava.classList.add("scrolledline");
        nava.classList.remove("nonscrolledline");
    } else {
        navbar.classList.add("nonscrolled");
        navbar.classList.remove("scrolled");
        nava.classList.add("nonscrolledline");
        nava.classList.remove("scrolledline");
    }
}

window.onscroll = function () {
    scrollFunction();
};

hamburger.onclick = function () {
    if (document.documentElement.scrollTop < 80) {
        console.log(document.documentElement.scrollTop);
        navbar.classList.toggle("darkgray");
    } else {
        navbar.classList.add("scrolled");
    }
};
