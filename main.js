// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction(x) {
    if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
    ) {
        document.querySelector(".navbar").style.backgroundColor =
            "rgba(60, 60, 60, 1)";
        document.querySelector(".container-fluid > a").style.fontSize = "1em";
        document.querySelector(".container-fluid > a").style.lineHeight = "1em";
    } else {
        document.querySelector(".navbar").style.backgroundColor =
            "rgba(60, 60, 60, 0)";
        document.querySelector(".container-fluid > a").style.fontSize = "1.5em";
        document.querySelector(".container-fluid > a").style.lineHeight =
            "1.5em";
    }
}
