// $(document).ready(function () {
//     $(".icon").click(function () {
//         $('body').toggleClass('hiddenoverflow');
//         $(".mobilenav").fadeToggle(500);
//         $(".top-menu").toggleClass("top-animate");
//         $(".mid-menu").toggleClass("mid-animate");
//         $(".bottom-menu").toggleClass("bottom-animate");   
//     });
// });

$(function(){
    $('.navbar-toggle, nav').click(function(){
        $('body').toggleClass('hiddenoverflow')
        $('.navbar-toggle').toggleClass('navbar-on');
        $('nav').fadeToggle();
        $('nav').removeClass('nav-hide');
    });
});

