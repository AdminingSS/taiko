$(document).ready(function() {

    const $fullpage = $('#fullpage');
    const $fullpageAbout = $('#fullpageAbout');
    const options = {
        normalScrollElements: '.tm-scrollable',
        verticalCentered: false,
        fitToSection: false,
        paddingTop: '140px',
        fixedElements: 'header, aside',
        setAllowScrolling: true,
        //scrollBar: true,
        //scrollOverflow: true,
        menu: '#controls',
        normalScrollElementTouchThreshold: 3,
        responsiveWidth: 960,
        responsiveHeight: 600,
        afterLoad: function(origin){
            var loadedSection = this;
            var slideLeft = loadedSection.find('.slideLeft');
            var slideRight = loadedSection.find('.slideRight');

            slideLeft.addClass('slideInLeft');
            slideRight.addClass('slideInRight');
            slideLeft.removeClass('slideLeft');
            slideRight.removeClass('slideRight');

            //использование индекса
            // if(origin.index == 2){
            //     alert("Section 3 ended loading");
            // }

            //использование ссылки с привязкой
            // if(origin.anchor == 'two'){
            //
            //     alert("Section 2 ended loading");
            // }
        }
    };

    const optionsAbout = {
        normalScrollElements: '.tm-scrollable',
        verticalCentered: false,
        fitToSection: false,
        paddingTop: '140px',
        fixedElements: 'header, aside',
        scrollBar: true,
        autoScrolling: false,
        setAllowScrolling: true,
        //scrollOverflow: true,
        menu: '#controls',
        normalScrollElementTouchThreshold: 3,
        responsiveWidth: 960,
        responsiveHeight: 600,
        afterLoad: function(origin){
            var loadedSection = this;
            var slideLeft = loadedSection.find('.slideLeft');
            var slideRight = loadedSection.find('.slideRight');

            slideLeft.addClass('slideInLeft');
            slideRight.addClass('slideInRight');
            slideLeft.removeClass('slideLeft');
            slideRight.removeClass('slideRight');

            //использование индекса
            // if(origin.index == 2){
            //     alert("Section 3 ended loading");
            // }

            //использование ссылки с привязкой
            // if(origin.anchor == 'two'){
            //
            //     alert("Section 2 ended loading");
            // }
        }
    };

    $fullpage.fullpage(options);

    $fullpageAbout.fullpage(optionsAbout);

    //$.fn.fullpage.setAllowScrolling(true);
});