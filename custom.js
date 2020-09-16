$('.team_slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive:[
        {
            breakpoint: 991,
            settings: {
                dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
            }
        },
        {
             breakpoint: 400,
            settings: {
                dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
            }
            
        }
    ]
})
