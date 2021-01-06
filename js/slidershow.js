$(document).ready(function(){
    $('.slideshow').slick({
        
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1082,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
          
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.slideshow').slickLightbox({
        src: 'src',
        itemSelector: 'img',
        navigateByKeyboard: true,
        background: 'rgba(251,250,248)'
      });
      $('.slideshow').slickLightbox().on({
        'show.slickLightbox':function(){
          $('body').toggleClass('hiddenoverflow')
        },
        'hide.slickLightbox':function(){
          $('body').removeClass('hiddenoverflow')
        }
      });
  });
