//-------- TRIGGER CAROUSEL ---------//
var $bannerSlider = $('.banner-slider');
if($bannerSlider.length > 0){
    $bannerSlider.owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1,
        dots:true,
    });
}
$bannerSlider.owlCarousel().trigger('refresh.owl.carousel');



//-------- TRIGGER CAROUSEL FOR HIGHLIGHT TYPE ONE --------//
var $highlightTypeOneProducts =  $('#highlightTypeOneProducts');
if($highlightTypeOneProducts.length > 0){
    $highlightTypeOneProducts.on('changed.owl.carousel initialized.owl.carousel', function (event) {
    $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        loop: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin:20,
        dots:false,
        navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            576:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:4,
            },
        }
    });
}
$highlightTypeOneProducts.owlCarousel().trigger('refresh.owl.carousel');