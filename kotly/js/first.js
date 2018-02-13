$(document).ready(function(){
  $('#first-slider').owlCarousel({
    loop:true,
    margin:0,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-chevron-left" aria-hidden="true">','</i><i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    autoplay:true,
	autoplayTimeout:3000,
	
	autoplayHoverPause:false,
	smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  $('#second-slider').owlCarousel({
    loop:true,
    margin:0,
    stagePadding:0,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:false,
    dots: false,
    autoplayTimeout:3000,
    
    autoplayHoverPause:false,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        640:{
            items:2,
            nav:false
        },
        1000:{
            items:4
        },

        1200:{
            items:5
        }


    }
})

  $('#third-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:false,
    autoplayTimeout:3000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        640:{
            items:2,
            nav:false
        },
        1000:{
            items:4
        },

        1200:{
            items:5
        }


    }
})
/*При прокруткі хедер стає фіксованим */
// .fixe-header .katalog-search .div-fixed-header .no-padding

$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        // создаем эффекты и анимацию
    $('.div-fixed-header').addClass('fixe-header');
    $('.katalog-search').addClass('no-padding');
    }
    else{
        $('.div-fixed-header').removeClass('fixe-header');
        $('.katalog-search').removeClass('no-padding');
    }
});
/*При прокруткі хедер стає фіксованим */
/*При наведенні на каталог зявдяється меню */
//.display-for-menu{position: relative;}
//.hiiden-for-menu{display: none; position: absolute;}
//.display-when-scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        // создаем эффекты и анимацию
    $('.display-for-menu').mouseover()
    }
    else{
        $('.div-fixed-header').removeClass('fixe-header');
        $('.katalog-search').removeClass('no-padding');
    }
});
/*При наведенні на каталог зявдяється меню */







});
