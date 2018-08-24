function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

var slides = document.getElementsByClassName("mySlides");
var slideIndex = 0;
var i;
var interval;
var timeout;

function immediatelyShowSlides() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
}

function showSlides(n) {
    slideIndex = n;
    immediatelyShowSlides();
    interval = setInterval(immediatelyShowSlides, 3000);
}

function thumb_showSlides(n) {
    clearInterval(interval);
    clearTimeout(timeout);
    showSlides(n);
}

// bat su kien mouseenter va mouseleave
document.getElementById("slider").onmouseenter = function () {
    clearInterval(interval);
    clearTimeout(timeout);
};

document.getElementById("slider").onmouseleave = function () {
    timeout = setTimeout(showSlides, 3000, slideIndex);
};

showSlides(0);