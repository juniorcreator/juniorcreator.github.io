$(document).ready(function(){
  $('#main-firs-carousel').owlCarousel({
    loop:true,
    margin:0,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-chevron-left" aria-hidden="true">','</i><i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    autoplay:true,
	autoplayTimeout:4000,
	dots: true,
	autoplayHoverPause:false,
	smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        430:{
            items:1,
            nav:false
        },
        1000:{
            items:1
        }
    }
})
/*При клике добавляет клас для скрытого меню */
$('.menu-open').click(function(){
    $('.cont-hidden-menu').toggle()});
/*При клике добавляет клас для скрытого меню */




$('#main-second-carousel').owlCarousel({
    loop:true,
    margin:30,
    slideBy:3,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 500,
    responsive:{
        0:{
            items:3,
            margin:5
        },
        600:{
            items:3,
            margin:5
        },
        1000:{
            items:3
        }
    }
})
$('#main-third-carousel').owlCarousel({
    loop:true,
    margin:100,
    stagePadding: 40,
    slideBy:3,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 500,
    responsive:{
        0:{
            items:2,
            margin:20,
            stagePadding: 20

        },
        600:{
            items:3
        },
        950:{
            items:3
            
        },
        1000:{
            items:3
        }
    }
})
  
$('#main-fourth-carousel').owlCarousel({
    loop:true,
    margin:30,
    stagePadding: 0,
    slideBy:3,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 500,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('#main-five-carousel').owlCarousel({
    loop:true,
    margin:0,
    stagePadding: 0,
    slideBy:3,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 500,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#our-specialists-parihmahers').owlCarousel({
    loop:true,
    margin:100,
    stagePadding: 40,
    slideBy:3,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 500,
    responsive:{
        0:{
            items:2,
            margin:40,
            stagePadding: 10

        },
        600:{
            items:3
        },
        950:{
            items:3
            
        },
        1000:{
            items:3
        }
    }
})

$('#our-specialists-masters-of-manikura').owlCarousel({
    loop:true,
    margin:100,
    stagePadding: 40,
    slideBy:3,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 500,
    responsive:{
        0:{
            items:2,
            margin:40,
            stagePadding: 10

        },
        600:{
            items:3
        },
        950:{
            items:3
            
        },
        1000:{
            items:3
        }
    }
})

$('#our-specialists-cosmetologs').owlCarousel({
    loop:true,
    margin:100,
    stagePadding: 40,
    slideBy:3,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 500,
    responsive:{
        0:{
            items:2,
            margin:40,
            stagePadding: 10

        },
        600:{
            items:3
        },
        950:{
            items:3
            
        },
        1000:{
            items:3
        }
    }
})

$('#our-specialists-doctors-cosmetologs').owlCarousel({
    loop:true,
    margin:100,
    stagePadding: 40,
    slideBy:3,
    rewind:true,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:4000,
    dots: false,
    autoplayHoverPause:false,
    smartSpeed: 500,
    responsive:{
        0:{
            items:2,
            margin:40,
            stagePadding: 10

        },
        600:{
            items:3
        },
        950:{
            items:3
            
        },
        1000:{
            items:3
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
