$(document).ready(function() { 
    $('.header-container').scrollToFixed({ 
        marginTop: 0, limit: 1800});
});

$(document).ready(function () {
    $(window).scroll(function () {
        $(".hero").css("opacity", 1 - $(window).scrollTop() / $('.hero').height()*6);
    
        // if ($(document).scrollTop() > 1225) {
        //     $(".header-container").addClass("scrolled");
           
        // } else {
        //     $(".header-container").removeClass("scrolled");
           
        // }

    });
});


