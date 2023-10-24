import Swiper from 'swiper';
import {Pagination, Navigation, Autoplay, Keyboard, EffectCards} from 'swiper/modules';

export function slider() {
    const swiperPromo = new Swiper('#swiper-promo', {
        modules: [Pagination, Navigation, Autoplay, Keyboard],
        rewind: true,
        speed: 1000,
        allowTouchMove: false,

        pagination: {
            el: '.swiper-pagination__promo',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next__promo',
            prevEl: '.swiper-button-prev__promo',
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        keyboard: {
            enabled: true,
        },
    });

    const swiperDescription = new Swiper('#swiper-description', {
        modules: [Pagination, Navigation, EffectCards],
        speed: 500,
        effect: 'cards',
        rewind: true,
        
        pagination: {
            el: '.swiper-pagination__cards',
            clickable: true,
        },
        
        navigation: {
            nextEl: '.swiper-button-next__cards',
            prevEl: '.swiper-button-prev__cards',
        },
        
        cardsEffect: {
            perSlideOffset: 12,
            perSlideRotate: 0,
            slideShadows: false,
            rotate: false,
        },
        
    });
}