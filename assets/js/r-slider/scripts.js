//   all ------------------
function initPazarCoffee() {
    "use strict";

    //   Background image ------------------
    var a = $(".bg");
    a.each(function (a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    if ($(".header-cart_wrap_container").length > 0) {
        var aps = new PerfectScrollbar('.header-cart_wrap_container', {
            swipeEasing: true,
            minScrollbarLength: 20
        });
    }
    var wlwrp = $(".header-cart_wrap"),
        wllink = $(".sc_btn");
    function showCart() {
        wlwrp.fadeIn(1).addClass("vis-cart").removeClass("novis_cart")
        aps.update();
        wllink.addClass("scwllink");
    }
    function hideCart() {
        wlwrp.fadeOut(1).removeClass("vis-cart").addClass("novis_cart");
        wllink.removeClass("scwllink");
    }
    wllink.on("click", function () {
        if (wlwrp.hasClass("novis_cart")) showCart();
        else hideCart();
    });

    //   slider / carousel ------------------
    function inintsingleSlider() {
        if ($(".single-slider").length > 0) {
            var j2 = new Swiper(".single-slider .swiper-container", {
                preloadImages: false,
                slidesPerView: 1,
                spaceBetween: 0,
                observer: true,
                observeParents: true,
                loop: true,
                autoHeight: true,
                grabCursor: true,
                mousewheel: false,
                pagination: {
                    el: '.ss-slider-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.ss-slider-cont-next',
                    prevEl: '.ss-slider-cont-prev',
                },
            });
        }
    }
    inintsingleSlider();
    if ($(".testimonilas-carousel").length > 0) {
        var j2 = new Swiper(".testimonilas-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,

            },
            navigation: {
                nextEl: '.tc-button-next',
                prevEl: '.tc-button-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
            }
        });
    }
    if ($(".product-slider").length > 0) {
        var j2 = new Swiper(".product-slider .swiper-container", {
            preloadImages: false,
            slidesPerView: 2,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            loop: true,
            autoHeight: true,
            grabCursor: true,
            mousewheel: false,
            pagination: {
                el: '.ss-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ss-slider-cont-next',
                prevEl: '.ss-slider-cont-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
            }
        });
    }
    if ($(".events-carousel").length > 0) {
        var j2 = new Swiper(".events-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: false,
            navigation: {
                nextEl: '.ec-button-next',
                prevEl: '.ec-button-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
            }
        });
    }
    if ($(".multi-slideshow_fs").length > 0) {
        var ms1 = new Swiper(".multi-slideshow_fs .swiper-container", {
            preloadImages: false,
            loop: true,
            speed: 1400,
            spaceBetween: 0,
            effect: "fade",
            init: false,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            },
        });
        setTimeout(function () {
            ms1.init();
        }, 2000);
    }
    if ($(".fs-slider").length > 0) {
        var j3 = new Swiper(".fs-slider .swiper-container", {
            preloadImages: false,
            loop: true,
            grabCursor: true,
            speed: 2400,
            spaceBetween: 0,
            effect: "slide",
            mousewheel: false,
            parallax: true,


            init: false,
            pagination: {
                el: '.hero-slider-wrap_pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.fs-slider-button-next',
                prevEl: '.fs-slider-button-prev',
            },
            autoplay: {
                delay: 350000,
                disableOnInteraction: false
            },

        });
        setTimeout(function () {
            j3.init();
        }, 1500);
        j3.on('slideChange', function () {
            $(".custom-scroll-link").on("click", function () {
                var a = 20;
                if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
                    var b = $(this.hash);
                    b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
                    if (b.length) {
                        $("html,body").animate({
                            scrollTop: b.offset().top - a
                        }, {
                            queue: false,
                            duration: 1200,
                            easing: "easeInOutExpo"
                        });
                        return false;
                    }
                }
            });
        });
    }
    if ($(".grid-carousel ").length > 0) {
        var totalSlides2 = $(".grid-carousel .swiper-slide").length;
        var gridCarusel = new Swiper(".grid-carousel .swiper-container", {
            preloadImages: false,
            loop: true,
            centeredSlides: true,
            freeMode: false,
            slidesPerView: 3,
            spaceBetween: 0,
            grabCursor: true,
            mousewheel: false,
            parallax: true,
            speed: 1400,
            effect: "slide",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

            navigation: {
                nextEl: '.grc-carousel-button-next',
                prevEl: '.grc-carousel-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
            }
        });
    }


    function csselem() {
        $(".fs-slider-item").css({
            height: $(".fs-slider").outerHeight(true)
        });
    }
    csselem();

    //   css ------------------
    var $window = $(window);
    $window.on("resize", function () {
        csselem();
        menuDotsdec();
        mobMenuInit();
    });
    $window.scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header.main-header").addClass("scroll-sticky");

        } else {
            $("header.main-header").removeClass("scroll-sticky");

        }
    });
    if ($(".fixed-bar").outerHeight(true) < $(".post-container").outerHeight(true)) {
        $(".fixed-bar").addClass("fixbar-action");
        $(".fixbar-action").scrollToFixed({
            minWidth: 1064,
            marginTop: function () {
                var a = $(window).height() - $(".fixed-bar").outerHeight(true) - 120;
                if (a >= 0) return 20;
                return a;
            },
            removeOffsets: true,
            limit: function () {
                var a = $(".limit-box").offset().top - $(".fixed-bar").outerHeight() + 30;
                return a;
            }
        });
    } else $(".fixed-bar").removeClass("fixbar-action");
    $(".gallery_filter-button").on("click", function () {
        $(".gth").slideToggle(400);
    });
}

//   Init All ------------------
$(document).ready(function () {
    initPazarCoffee();
    initparallax();
});