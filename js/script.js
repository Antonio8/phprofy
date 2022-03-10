$(document).ready(function(){
$('.slider-body').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
});
$('.slider-body').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-slide').removeClass('jobs-center');
    $('.slick-current + .slick-active').addClass('jobs-center');
  }).trigger('afterChange');
});

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
