function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

// script for slider and thumbnail
//configuration
var heightSlider = 450;
var widthSlider = 700;
var heightThumbnail = 66;
var animationSpeed = 1000;
var pauseTime = 2000;
var currentSlide = 1;

// cache DOM
var $slider = $('#slider');
var $slideContainer = $slider.find('.slides');
var $slides = $slider.find('.slide');

var $thumbnail = $('#thumbnail');
var $thumbContainer = $thumbnail.find('.thumbs');
var $thumbs = $thumbnail.find('.thumb');

//declare interval for start and stop slider, thumbnail
var intervalSlider;
function startSlider() {
    intervalSlider = setInterval(function () {
        $thumbContainer.animate({ 'margin-top': '-=' + heightThumbnail }, animationSpeed);
        $slideContainer.animate({ 'margin-left': '-=' + widthSlider }, animationSpeed, function () {
            currentSlide++;
            // document.getElementsByClassName('thumb')[currentSlide-1].style.border = "none";
            // document.getElementsByClassName('thumb')[currentSlide].style.border = "1px solid lightgreen";
            if (currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0); //use this in order not to have animation
                $thumbContainer.animate({ 'margin-top': 0 }, animationSpeed);
            }
            console.log($thumbContainer.marginBottom);
        });
    }, pauseTime);
};

function stopSlider() {
    clearInterval(intervalSlider);
}
var n;
// function current(n) {
//     stopSlider();
//     $thumbContainer.animate({ 'margin-top': '-' + n * heightThumbnail }, animationSpeed);
//     $slideContainer.animate({ 'margin-top': '-' + n * heightSlider }, animationSpeed);
//     currentSlide = n;
//     startSlider();
// }

$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

//start the slider and thunbmail
startSlider();

//nhận biết đã tới cuối thumbnail và cuộn lại từ đầu