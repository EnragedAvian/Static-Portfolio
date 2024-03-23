var prevScrollPos = window.scrollY;
var maxScrollPos = window.scrollY;
var hidden = false;

window.onscroll = function() {
    var currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        maxScrollPos = currentScrollPos;
        if (hidden) document.getElementById("navbar").style.top = "0"; // only modify css if already hidden
    } else if (currentScrollPos > maxScrollPos + 40) {
        document.getElementById("navbar").style.top = "-100px";
        hidden = true;
    }

    prevScrollPos = currentScrollPos;
}


var hamburgerHidden = true;
document.getElementById("hamburgerButton").addEventListener("click", (e) => {
    if (hamburgerHidden) {
        document.getElementById("navLinks").style.visibility = "visible";
    }
});