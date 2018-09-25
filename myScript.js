$(document).ready(() => {
    //khai báo các biến ban đầu
    var $slides = $(".mySlides");
    var slideshowContainer = $(".slideshow-container");
    var slideIndex = 0, timeoutSlider, timeoutSidenav;
    var sideNavOpen = 'false';
    var sliderPauseTime = 3000, pauseTimeSideNav = 10000;
    var closeBtn = $(".closebtn");
    var scrollUp = $(".arrowup"), scrollDown = $(".arrowDown");
    var slideUp = $("#slideUp"), slideDown = $("#slideDown");

    var languageEN = $("#en"), languageVI = $("#vi");

    openNav = () => {
        sideNavOpen = 'true';
        clearTimeout(timeoutSidenav);
        document.getElementById("mySidenav").style.width = "27%";
        document.getElementById("main").style.marginRight = "20vw";
        timeoutSidenav = setTimeout(closeNav, pauseTimeSideNav);
    }

    closeNav = () => {
        sideNavOpen = 'false';
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "auto"; //chố này có vấn đề với transition
        resumeSlider();
    }
    pauseSlider = () => {
        clearTimeout(timeoutSlider);
        console.log("pause");
    }

    resumeSlider = () => {
        if (sideNavOpen === 'false')
            timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
        console.log("resume");
    }

    showSlides = (n) => {
        slideIndex = n;
        $slides.css("display", "none");
        $slides.eq(slideIndex).css("display", "block");
        if (slideIndex < $slides.length - 1) { slideIndex++; } //độ dài của $slides là 4
        else { slideIndex = 0; }
        timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
    }


    //bắt sự kiện mouseenter và mouseleave để quản lí slider
    slideshowContainer.mouseenter(() => { pauseSlider(); }).mouseleave(() => { resumeSlider(); });

    //tạm thời cho tất cả icon cùng bắt 1 sự kiện openNav()
    $(".accessory").click(openNav);
    closeBtn.click(closeNav);

    //bắt sự kiện click scrollUp và scrollDown
    scrollUp.click(() => {

    });
    scrollDown.click(() => {
    });

    //bắt sự kiện click slideUp và slideDown
    slideUp.click(() => {

    });
    slideDown.click(() => {

    });

    //bắt sự kiện nút chuyển đổi ngôn ngữ
    languageVI.click(() => {

    });
    languageEN.click(() => {

    });

    //chạy slide - khởi nguyên của mọi thứ bắt đầu từ đây
    showSlides(0);

});


//làm animation cho slide
//viết lại function cho thumbnail slider

//nạp json chuyển đổi ngôn ngữ
//dùng hàm lấy dữ liệu từ file local
//nạp json dữ liệu đầu vào của từng icon
//(tạm thời 2 cái này lấy dữ liệu từ local trước đã)