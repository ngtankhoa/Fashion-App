$(document).ready(function () {
    //kiểm tra có tổng cộng bao nhiêu hình và sinh slide mới
    $.get("")
        .done(function () {
            console.log("hihi");
        }).fail(function () {
            console.log("huhu");
        })

    var $slides = $(".mySlides");
    var slideshowContainer = $(".slideshow-container");
    var slideIndex = 0, timeoutSlider, timeoutSidenav;
    var sideNavOpen = 'false';
    var sliderPauseTime = 3000, pauseTimeSideNav = 10000;
    var closeBtn = $(".closebtn");
    var prev = $(".prev, #arrowup");
    var next = $(".next, #arrowdown");
    var languageEN = $("#en"), languageVI = $("#vi");

    function openNav() {
        sideNavOpen = 'true';
        clearTimeout(timeoutSidenav);
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
        timeoutSidenav = setTimeout(closeNav, pauseTimeSideNav);
    }

    function closeNav() {
        sideNavOpen = 'false';
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "auto";
        resumeSlider();
    }

    function showSlides(n) {
        slideIndex = n;
        if (slideIndex < 0) { slideIndex = 3; }
        $slides.css("display", "none");
        $slides.eq(slideIndex).css("display", "block");
        if (slideIndex < $slides.length - 1) { slideIndex++; } //độ dài của $slides là 4
        else { slideIndex = 0; }
        timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
    }

    function pauseSlider() {
        clearTimeout(timeoutSlider);
        console.log("pause");
    }

    function resumeSlider() {
        if (sideNavOpen === 'false')
            timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
        console.log("resume");
    }

    //bắt sự kiện mouseenter và mouseleave để quản lí slider
    slideshowContainer.mouseenter(function () { pauseSlider(); }).mouseleave(function () { resumeSlider(); });

    //tạm thời cho tất cả icon cùng bắt 1 sự kiện openNav()
    $(".accessory").click(openNav);
    closeBtn.click(closeNav);

    //bắt sự kiện click 4 arrow
    prev.click(function () {
        clearTimeout(timeoutSlider);
        showSlides(slideIndex - 2);
    });
    next.click(function () {
        clearTimeout(timeoutSlider);
        showSlides(slideIndex);
    });

    //bắt sự kiện nút chuyển đổi ngôn ngữ
    languageVI.click(function () {

    });
    languageEN.click(function () {

    });

    //chạy slide - khởi nguyên của mọi thứ bắt đầu từ đây
    showSlides(0);

});

//nạp json chuyển đổi ngôn ngữ
//dùng hàm lấy dữ liệu từ file local

//nạp json dữ liệu đầu vào của từng icon
//(tạm thời 2 cái này lấy dữ liệu từ local trước đã)

//sửa function nút prev
//làm animation cho slide
//viết lại function cho thumbnail slider