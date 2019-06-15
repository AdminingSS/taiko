//import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.less';
//import 'slick-carousel/slick/slick-theme.less';

$(()=>{
    (() => {
        const $sliderChars = $('.tm-slider-chars');
        const options = {
            slidesToShow: 3,
            slidesToScroll: 1,
            // prevArrow: '.slick-prev',
            // nextArrow: '.slick-next'
        };

        $sliderChars.slick(options);
    })();
});