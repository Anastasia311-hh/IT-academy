$(function(){
        
    $('.contact-slider').slick({
        dots:true,
        arrows:false,
        autoplay: true,
        slidesToShow:10,
        slidesToScroll:10,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }]
    });
})