$(document).ready(function () {
    //kiểm tra có tổng cộng bao nhiêu hình và sinh slide mới
    // var tmpURLSlider = "http://localhost:1337/images/model/model";
    // var tmpURLThumbnail = "http://localhost:1337/images/thumbnail/thumbnail";
    // var slidesLength = 0, boo = 'true';
    // do {
    //     $.get("http://localhost:1337/images/model/model" + slidesLength)
    //     .done(function () {
    //         slidesLength;
    //     }).fail(function () {
    //         boo = 'false';
    //     });

    // } while (boo === 'true');

    //khai báo các biến ban đầu
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
        document.getElementById("mySidenav").style.width = "27%";
        document.getElementById("").style.width = "50vw";
        // timeoutSidenav = setTimeout(closeNav, pauseTimeSideNav);
    }

    function closeNav() {
        sideNavOpen = 'false';
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "auto";
        resumeSlider();
    }

    function showSlides(n) {
        slideIndex = n;
        console.log("index trong show:" + slideIndex);
        $slides.css("display", "none");
        $slides.eq(slideIndex).css("display", "block");
        if (slideIndex < $slides.length - 1) { slideIndex++; } //độ dài của $slides là 4
        else { slideIndex = 0; }
        // timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
    }

    function showSlidesNgc(n) {
        console.log(slideIndex);
        slideIndex = n;
        if (slideIndex == -1) { slideIndex = 3; }
        else if (slideIndex == 0) { slideIndex = 1; }
        else if (slideIndex == 1) { slideIndex = 2; }
        else if (slideIndex == -2) { slideIndex = 0; };
        console.log("index trong show:" + slideIndex);
        $slides.css("display", "none");
        $slides.eq(slideIndex).css("display", "block");
        if (slideIndex == 1) {
            slideIndex = slideIndex - 1;
        }
        // timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
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
        console.log("truoc:" + slideIndex);
        var tmp = slideIndex - 2;
        console.log("tmp: " + tmp);
        showSlidesNgc(tmp);
        console.log(slideIndex);
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