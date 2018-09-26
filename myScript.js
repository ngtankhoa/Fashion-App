$(document).ready(() => {
    //khai báo các biến ban đầu
    var $slides = $(".mySlides");
    var slideshowContainer = $(".slideshow-container");
    var $colorItemSlides = $(".colorItemSlides");
    var slideIndex = 0, colorIndex = 0, timeoutSlider, timeoutSidenav;
    var sideNavOpen = 'false';
    var sliderPauseTime = 3000, pauseTimeSideNav = 10000;
    var closeBtn = $(".closebtn");
    var scrollUp = $(".arrowup"), scrollDown = $(".arrowDown");
    var slideUp = $("#slideUp"), slideDown = $("#slideDown");
    var mapPopup = $("#map-sidebar");
    var languageEN = $("#en"), languageVI = $("#vi");
    var closePupup = $("#closePopup");

    openNav = () => {
        sideNavOpen = 'true';
        clearTimeout(timeoutSidenav);
        document.getElementById("mySidenav").style.width = "27%";
        document.getElementById("main").style.marginRight = "20vw";
        // timeoutSidenav = setTimeout(closeNav, pauseTimeSideNav);
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

    showColorItem = () => {
        if (colorIndex < $colorItemSlides.length - 1) { colorIndex++ }
        else { colorIndex = 0; }
        $colorItemSlides.css("display", "none");
        $colorItemSlides.eq(colorIndex).css("display", "block");
        clearTimeout(timeoutSidenav);
        timeoutSidenav = setTimeout(closeNav, pauseTimeSideNav);
    }

    showColorItemReverse = () => {
        if (colorIndex < 0) { colorIndex = $colorItemSlides.length - 2; }
        else { colorIndex--; }
        $colorItemSlides.css("display", "none");
        $colorItemSlides.eq(colorIndex).css("display", "block");
        clearTimeout(timeoutSidenav);
        timeoutSidenav = setTimeout(closeNav, pauseTimeSideNav);
    }

    showPopup = () => {
        document.getElementById("popup").style.display = "block";
        document.getElementById("imgPopup").src = "./img/map-sidebar.png";

    }

    //bắt sự kiện mouseenter và mouseleave để quản lí slider
    //slideshowContainer.mouseenter(() => { pauseSlider(); }).mouseleave(() => { resumeSlider(); });
    //vì đây là desktop touch nên ta thay mouseenter và mouseleave bằng click của cả document
    $("body").click(() => {
        clearTimeout(timeoutSlider);
        console.log("clear timeoutSlider");
        if (sideNavOpen === 'false')
        {
            timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
            console.log("dat lai timeoutSlider");
        }
    });

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
        
        showColorItemReverse();
    });
    slideDown.click(() => {
       
        showColorItem();
    });

    //bắt sự kiện nút chuyển đổi ngôn ngữ
    languageVI.click(() => {
       
    });
    languageEN.click(() => {

    });

    //chạy slide - khởi nguyên của mọi thứ bắt đầu từ đây
    showSlides(0);

    //phần onload của slide màu sắc trang phục
    $colorItemSlides.css("display", "none");
    $colorItemSlides.eq(colorIndex).css("display", "block");

    // test load json
    $.getJSON("img/data.json",
        function (data) {

        }
    );

    //Map popup
    mapPopup.click (() => {
        console.log("Chay vao day");
        showPopup();
    });

    //Close popup
    closePopup.click(() => {
        document.getElementById("popup").style.display = "none";
    });
});


//làm animation cho slide
//viết lại function cho thumbnail slider

//nạp json chuyển đổi ngôn ngữ
//dùng hàm lấy dữ liệu từ file local
//nạp json dữ liệu đầu vào của từng icon
//(tạm thời 2 cái này lấy dữ liệu từ local trước đã)