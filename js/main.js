'use strict';

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});



// ------------swipers-------------//
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});
var bannerSwiper = new Swiper(".banner-swiper", {
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    speed: 500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'vertical',
    autoHeight: true,
});

const cardsSwiper = new Swiper(".projectSwiper", {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    speed: 500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    autoHeight: true,
});


const imagesSwiper = new Swiper(".images-wrapper .images-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 120,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: null,
    },
    allowTouchMove: false,
    loop: true,
});



cardsSwiper.onAny((eventMsg) => {
    if (eventMsg === "slidePrevTransitionStart") {
        imagesSwiper.slidePrev();
    } else if (eventMsg === "slideNextTransitionStart") {
        imagesSwiper.slideNext();
    } else {
        // console.log({ eventMsg });
    }
});

// -----xx-------swipers----xx---------//

// ------------mobile-menu----//
const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    overlay.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
overlay.addEventListener("click", mobileMenu)

// -----xx-------mobile-menu--xx--//

// ----------counter---------------//

var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});

// ----xx------counter-------xx--------//