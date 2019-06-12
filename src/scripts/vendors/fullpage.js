$(document).ready(function() {
    $('#fullpage').fullpage({
        normalScrollElements: '.tm-scrollable',
        verticalCentered: false,
        //fitToSection: false,
        paddingTop: '120px',
        fixedElements: 'header, aside',
        scrollOverflow: true,

        //options here
        //autoScrolling:false
        //scrollHorizontally: true
    });

    //$('.tm-scrollable').attr('style','width: 101%;')

    //methods
    //$.fn.fullpage.setAllowScrolling(false);
});