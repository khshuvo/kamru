$(function(){

    $('.venobox').venobox();
    
    $('.banner_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        fade: true,
        dots:true,
        autoplaySpeed:4000
    });
    
    $('.sceenshot_main').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        dots:true
    });

    
    $('.testimonial_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial_img'
    });
    $('.testimonial_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_text',
        arrows:false,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
    });

});