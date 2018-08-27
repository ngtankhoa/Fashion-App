var slides = document.getElementsByClassName("mySlides");
var slideIndex = 0;
var i, interval, timeoutSlider, timeoutSidenav;
var sideNavOpen = 'false';
var thumbContainer = document.getElementById("thumbnail");
var thumbHeight = document.getElementsByClassName("thumb")[1];
thumbHeight = thumbHeight.scrollHeight + 6; //temporary know that margin top is 6px
window.scrollBy(60, 60);

function openNav() {
    sideNavOpen = 'true';
    clearTimeout(timeoutSidenav);
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    pauseSlider();
    timeoutSidenav = setTimeout(closeNav, 10000);
}

function closeNav() {
    sideNavOpen = 'false';
    resumeSlider();
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "auto";
}

// for arrow pointer
function plusSlides() {
    showSlides(slideIndex);
}

function subSlides() {
    slideIndex--;
    showSlides(slideIndex);
}

function immediatelyShowSlides() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
}

function scrollThumbnail() {
    thumbContainer.scrollTop = thumbHeight;
}

function showSlides(n) {
    slideIndex = n;
    immediatelyShowSlides();
    interval = setInterval(function () {
        immediatelyShowSlides();
        scrollThumbnail();
    }, 3000);
}

function thumb_showSlides(n) {
    clearInterval(interval);
    clearTimeout(timeoutSlider);
    showSlides(n);
}

function resumeSlider() {
    timeoutSlider = setTimeout(showSlides, 3000, slideIndex);
    console.log("resume");
};

function pauseSlider() {
    clearInterval(interval);
    clearTimeout(timeoutSlider);
    console.log("pause");
};

// bat su kien mouseenter va mouseleave
document.getElementById("slider").onmouseenter = pauseSlider;

document.getElementById("slider").onmouseleave = function(){
    if (sideNavOpen==='false') resumeSlider();
};

showSlides(0);

//hoc jQuery de lam animation cho scroll
//them noi dung vao bang json