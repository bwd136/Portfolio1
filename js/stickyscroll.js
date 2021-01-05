$(document).ready(function() { 
    $('.herobox').parallaxScroll({
        friction: 1
    });
    $('.header-container').scrollToFixed({ 
        marginTop: 0, limit: 1800});
});

$(document).ready(function () {
    $(window).scroll(function () {
        $(".herobox").css("opacity", 1 - $(window).scrollTop() / $('.herobox').height()*6);
    
        // if ($(document).scrollTop() > 1225) {
        //     $(".header-container").addClass("scrolled");
           
        // } else {
        //     $(".header-container").removeClass("scrolled");
           
        // }

    });
});


