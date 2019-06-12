$(document).ready(function() {

    $(window).scroll(function () {
        //$(window).resize();
    })

    const $scrollAbleElement = $('.tm-scrollable');
    //let cont = 0;

    $scrollAbleElement.each(scrollsInit);
    $scrollAbleElement.on('scroll', scrollHandle);

    function scrollsInit() {

    }

    function scrollHandle() {
// console.log(this.pos);
// this.pos++;
    }
});