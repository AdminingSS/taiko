$(document).ready(function() {
    $('#fullpage').fullpage({
        normalScrollElements: '.tm-scrollable',
        verticalCentered: false,
        fitToSection: false,
        paddingTop: '120px',
        fixedElements: 'header, aside',
        scrollOverflow: true,
        scrollOverflowReset: true,
        menu: '#controls',
        normalScrollElementTouchThreshold: 3

        //options here
        //autoScrolling:false
        //scrollHorizontally: true
    });

    //$.fn.fullpage.setAllowScrolling(false);
});