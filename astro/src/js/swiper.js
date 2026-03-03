import Swiper from "swiper";

const swiperFacilities = new Swiper('#swiperFacilities',{
  direction: "horizontal",
    loop: true,
    pagination: {
        // el: ".swiper-pagination",
    },
    navigation: {
        // nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1000: {
            enabled: false,
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
})