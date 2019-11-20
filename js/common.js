// @koala-prepend "jquery-1.11.3.min.js"
// @koala-prepend "swiper.min.js"
// @koala-prepend "jquery.SuperSlide.2.1.js"


$(window).resize(function () {
    _navEvent()
})

function _navEvent() {
    if ($('.header-nav nav').length == 0) {
        return;
    }
    var len = $('.header-nav nav a.active').text().length;
    var $item = $('.header-nav nav a.active').parent();
    var offset = $item.offset();
    var uo = $('nav').offset();

    var $bg = $('.header-nav nav .nav-bg');
    var left = offset.left - uo.left;
    $bg.css({
        'width': len + 'em',
        'left': left
    });

    $('.header-nav nav a').hover(function () {
        var len2 = $(this).text().length;
        var $item2 = $(this).parent();
        var offset2 = $item2.offset();
        var left2 = offset2.left - uo.left;

        $bg.css({
            'width': len2 + 'em',
            'left': left2
        })

    }, function () {
        $bg.css({
            'width': len + 'em',
            'left': left
        });
    })
}

$(document).ready(function () {
    _navEvent()
    $("img").on("mousedown", function (e) {
        e.preventDefault()
    })

    if ($(".banner .swiper-slide").length > 0) {
        var banner = new Swiper(".banner .swiper-container", {
            loop: true,
            speed: 600,
            navigation: {
                prevEl: '.banner .swiper-button-prev',
                nextEl: '.banner .swiper-button-next'
            },
        })
    }
    var honourThumbs = new Swiper('.honour-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        touchRatio: 0,
        speed: 600,
    });
    var honourTop = new Swiper('.honour-top', {
        spaceBetween: 10,
        speed: 600,
        touchRatio: 0,

        navigation: {
            nextEl: '.honour-top .swiper-button-next',
            prevEl: '.honour-top .swiper-button-prev',
        },
        thumbs: {
            swiper: honourThumbs
        }
    });

    $(".case .list").slide({
        mainCell: "ul",
        autoPlay: true,
        effect: "topMarquee",
        vis: 2,
        interTime: 30,
        autoPlay: true,
    });

    if ($(".product-recommend li").length > 0) {
        $(".product-recommend .list").slide({
            mainCell: "ul",
            autoPlay: true,
            effect: "leftMarquee",
            vis: 3,
            interTime: 30,
            autoPlay: true,
        });

    }

    // if ($(".problem .right .list").length > 0) {
    //     $(".problem .right .list").slide({
    //         mainCell: "ul",
    //         autoPlay: true,
    //         effect: "topMarquee",
    //         vis: 4,
    //         interTime: 30,
    //         autoPlay: true,
    //     });
    // }
    var sceneSwiper = new Swiper('.scene .swiper-container', {
        spaceBetween: 20,
        slidesPerView: 4,
        speed: 600,
        touchRatio: 0,
        autoPlay: {
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
        navigation: {
            nextEl: '.scene .swiper-button-next',
            prevEl: '.scene .swiper-button-prev',
        },

    });

    var accordionItemTit = $(".accordion ul > li > a")
    accordionItemTit.siblings("ol").hide()

    for (var i in accordionItemTit) {

        // console.log(accordionItemTit.eq(i));
        // console.log(this)
        // accordionItemTit.eq(i).hasClass("active") ? accordionItemTit.siblings("ol").show() : accordionItemTit.siblings("ol").hide()
    }


    accordionItemTit.on("click", function () {
        var state = ($(this).children("i")[0]).className.indexOf("icon-jia1") > -1
        $(this).toggleClass("open")
        // $(this).children("i").toggleClass("icon-jianqu", !state).toggleClass("icon-jia1", state)
        $(this).children("i").toggleClass("icon-jia1", !state).toggleClass("icon-jianqu", state)
        $(this).siblings("ol").stop().slideToggle(200)

        // if ($(this).hasClass("active")) {
        //     console.log(1);
        //     $(this).siblings("ol").show()
        // }

    })


})