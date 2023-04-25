jQuery(document).ready(function($) {

//-------------------------- STICKY MENU	
	
var stickyOffset = $('.main-menu').offset().top;
$(window).scroll(function(){
  var sticky = $('.main-menu'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

//-------------------------- FUNCIONES RESPONSIVE	
	
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 950) {
      $('.menu-container').addClass('offcanvas offcanvas-start').attr("visibility", "visible");
      $('.submenu-collapse').removeClass('show');
      $('.first-lvl').addClass('collapsed').attr('data-bs-toggle', 'collapse');
      $('.second-lvl').addClass('collapsed').attr('data-bs-toggle', 'collapse');		
    } else if (ww >= 951) {
      $('.menu-container').removeClass('offcanvas offcanvas-start').attr("visibility", "hidden");
      $('.submenu-collapse').addClass('show');
      $('.first-lvl').removeClass('collapsed');	
      $('.second-lvl').removeClass('collapsed');		
    }	  
    if (ww < 769) {
      $('.menu-tabs-listing').removeClass('show');	
      $('.responsability-sidebar').removeClass('responsability-sidebar-floating');	
      $('.tyc-sidebar').removeClass('tyc-sidebar-floating');			
    } else if (ww >= 770) {
      $('.menu-tabs-listing').addClass('show');	
      $('.responsability-sidebar').addClass('responsability-sidebar-floating');	
      $('.tyc-sidebar').addClass('tyc-sidebar-floating');			
    }	  
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();
});


//-------------------------- CARRUSEL NOTICIAS Y PROMOS

$(document).ready(function() {
    $('.news-boxed').slick({
        dots: true,
        arrow: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 960,
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

        ]
    });
});

