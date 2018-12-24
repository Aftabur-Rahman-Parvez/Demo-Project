

  $(function () {

    $(".slider-1").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav:true,
        autoplayHoverPause: true,
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
        },
        navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],

    });
});




$('.slider-2').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    },
    navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
})
$('.slider-3').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    },
    navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
})
$('.slider-4').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    },
    navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
})



$(function () {

    $("#men-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        },
        navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],

    });
});

$(function () {

    $("#women-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: false,
        nav:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        },
        navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],

    });
});

$(function () {

    $("#all-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        },
        navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });
});


// nav scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('nav.stk-1').addClass("sticky");
    }
    else{
        $('nav.stk-1').removeClass("sticky");
    }
});


  $(function () {

    $("#slider-1").owlCarousel({
        items: 1,
        autoplay: true,
        margin:10,
        smartSpeed: 700,
        loop: true,
        nav:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        },
        navText:[ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });
});


$(document).ready(function() {
    $('.Carousel').carousel({
        interval: 50000
    })
});

// wow active

$(function(){
    new WOW().init();
})

$( ".del-item-2" ).click(function() {
    $( ".del-item-2-1" ).remove();
  });
// menu active

$( '#navbarSupportedContent .navbar-nav a' ).on( 'click', function () {
	$( '#navbarSupportedContent .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});


// elevateZoom 

// $('#blog-img-2').elevateZoom({zoomType:'lens', lensShape:'round', lensSize:200});
$( ".del-item-1" ).click(function() {
    $( ".del-item-1-1" ).remove();
  });