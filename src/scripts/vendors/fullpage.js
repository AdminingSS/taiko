$(document).ready(function() {

    const $fullpage = $('#fullpage');
    const options = {
        normalScrollElements: '.tm-scrollable',
        verticalCentered: false,
        fitToSection: false,
        paddingTop: '140px',
        fixedElements: 'header, aside',
        scrollOverflow: true,
        menu: '#controls',
        normalScrollElementTouchThreshold: 3,
        responsiveWidth: 960,
        responsiveHeight: 600
    };

    $fullpage.fullpage(options);
    $.fn.fullpage.setAllowScrolling(true);
});