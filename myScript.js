
$(document).ready(() => {
    //khai báo các biến ban đầu
    var $slides = $(".mySlides");
    var slideshowContainer = $(".slideshow-container");
    var $colorItemSlides = $(".colorItemSlides");
    var slideIndex = 0, colorIndex = 0, timeoutSlider, timeoutSidenav;
    var timeoutPopup;
    var sideNavOpen = 'false';
    var sliderPauseTime = 3000, pauseTimeSideNav = 10000, popupTime = 3000;
    var closeBtn = $(".closebtn");
    var scrollUp = $(".arrowup"), scrollDown = $(".arrowDown");
    var slideUp = $("#slideUp"), slideDown = $("#slideDown");
    var mapPopup = $("#map-sidebar");
    var languageEN = $("#en"), languageVI = $("#vi");
    var closePopup = $("#closePopup");
    var qrPopup = $("#qrcodeImg");
    var $colorBtn = $("#productColor .colorBtn");

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
        console.log("pause slider");
    }

    resumeSlider = () => {
        if (sideNavOpen === 'false')
            timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
        console.log("resume slider");
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

    showMapPopup = () => {
        console.log("function show map popup");
        document.getElementById("popup").style.display = "block";
        document.getElementById("imgPopup").src = "./img/map-popup.png";
        clearTimeout(timeoutPopup);
        timeoutPopup = setTimeout(() => {
            document.getElementById("popup").style.display = "none";
        }, popupTime);
    }

    showQrPopup = () => {
        document.getElementById("popup").style.display = "block";
        document.getElementById("imgPopup").src = "./img/promotion-popup.png";
        clearTimeout(timeoutPopup);
        timeoutPopup = setTimeout(() => {
            document.getElementById("popup").style.display = "none";
        }, popupTime);
    }

    //check tương tác màn hình
    //vì đây là desktop touch nên ta thay mouseenter và mouseleave bằng click của cả document
    $("body").click(() => {
        console.log("body click");
        clearTimeout(timeoutSlider);
        console.log("clear timeoutSlider");
        // document.getElementById("popup").style.display = "none";
        if (sideNavOpen === 'false') {
            timeoutSlider = setTimeout(showSlides, sliderPauseTime, slideIndex);
            console.log("set timeoutSlider");
        }
    });

    //bắt sự kiện click outside popup (2 event phía dưới)
    $("#popup").click(() => {
        console.log("#popup click");
        //tắt popup
        document.getElementById("popup").style.display = "none";
    })

    $("#imgPopup").click((event) => {
        console.log("imgpopup click");
        event.stopPropagation();
        clearTimeout(timeoutPopup);
        timeoutPopup = setTimeout(() => {
            document.getElementById("popup").style.display = "none";
        }, popupTime);
    })

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

    //bắt sự kiện click các nút chuyển đổi màu sắc
    $("button").click(() => {
        alert($(this).index());
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

    //mở popup
    mapPopup.click(() => {
        console.log("#map-sidebar click");
        showMapPopup();
    });

    //đóng popup
    closePopup.click(() => {
        console.log("#closepopup click");
        document.getElementById("popup").style.display = "none";
    });

    qrPopup.click(() => {
        console.log("Chay vao day");
        showQrPopup();
    });

    // test load json
    $.getJSON("img/data.json",
        function (data) {
            console.log(data);
            var thumbnailModel = data.models[0].thumbnailModel;
            var modelImg = data.models[0].modelImg;
            var accessoryImg = data.models[0].accessory[0].accessoryImg;
            var productName = data.models[0].accessory[0].productName;
            var productDescription = data.models[0].accessory[0].productDescription;
            var productPrice = data.models[0].accessory[0].productPrice;
            var str = '';
            var mapSidebar = data.models[0].accessory[0].mapSidebar;
            var promotionDetail = data.models[0].accessory[0].promotionDetail;
            var qrcodeImg = data.models[0].accessory[0].qrcodeImg;
            // console.log(thumbnailModel);
            // console.log(modelImg );
            // console.log(accessoryImg);
            // console.log(productName);
            // console.log(productDescription);
            // console.log(productPrice);
            // console.log(str);
            // console.log(mapSidebar);
            // console.log(promotionDetail);
            // console.log(qrcodeImg);

            languageEN.click(() => {
                // $(".colorItemContainer").replaceWith('<div class="colorItemContainer">' + str + '</div>');
                $("#productInfo").replaceWith('<h5 id="productInfo">' + data.en.productInfo + '</h5>');
                $("#productName").replaceWith('<h3 id="productName">' + productName + '</h3>');
                $("#productDescription").replaceWith('<div id="productDescription">' + productDescription + '</div>');
                $("#productPrice").replaceWith('<div id="productPrice">' + productPrice + '</div>');
                $("#promotion").replaceWith('<h5 id="promotion">' + data.en.promotion + '</h5>');
                $("#promotionDetail").replaceWith('<div id="promotionDetail" class="col-8">' + promotionDetail + '</div>');
                $("#qrcodeImg").attr("src", qrcodeImg);
                $("#direction").replaceWith('<h5 id="direction">' + data.en.direction + '</h5>');
                $("#map-sidebar").attr("src",mapSidebar);
                for (var i in data.models[0].accessory[0].imgProduct){
                    var x = data.models[0].accessory[0].imgProduct[i];
                    var z = parseInt(i);
                    var y = parseInt(z + 1);
                    $("#choose" + y).attr("src",x);
                }
                for (var i in data.models)
                {
                    var z = parseInt(i);
                    var y = parseInt(z + 1);
                    console.log(data.models[i].thumbnailModel);
                    $("#thumbnailModel" + y).attr("src", data.models[i].thumbnailModel);
                    $("#modelImg" + y).attr("src", data.models[i].modelImg);
                }

            });

            languageVI.click(() => {
                $colorItemSlides.css("display", "none");
                $colorItemSlides.eq(colorIndex).css("display", "block");
            });
        }
    );

    // //test read json data 2
    // $.ajax({
    //     url: "./img/data.json",
    //     dataType: "json",
    //     success: function (data) {
    //        $.each(data.models, function (index, value) { 
    //            console.log(value.accessory[0].mapSidebar);
    //             var test = '<img src="' + value.accessory[0].mapSidebar + '" alt="map-sidebar" id="map-sidebar">';
    //             console.log(test);  
    //             $("#directionDetail").append(test);              
    //        });

    //     }
    // });
});


//làm animation cho slide
//viết lại function cho thumbnail slider

//nạp json chuyển đổi ngôn ngữ
//dùng hàm lấy dữ liệu từ file local
//nạp json dữ liệu đầu vào của từng icon
//(tạm thời 2 cái này lấy dữ liệu từ local trước đã)