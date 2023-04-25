jQuery(document).ready(function($) {

//-------------------------- STICKY MENU	


//-------------------------- FUNCIONES RESPONSIVE	
	
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 950) {
      $('.menu-container').addClass('offcanvas offcanvas-start').attr("visibility", "visible");
      $('.submenu-collapse').removeClass('show');
      $('.first-lvl').addClass('collapsed').attr('data-bs-toggle', 'collapse');
      $('.second-lvl').addClass('collapsed').attr('data-bs-toggle', 'collapse');
      $('.sub-menu-container').addClass('collapse');		
    } else if (ww >= 951) {
      $('.menu-container').removeClass('offcanvas offcanvas-start').attr("visibility", "hidden");
      $('.submenu-collapse').addClass('show');
      $('.first-lvl').removeClass('collapsed');	
      $('.second-lvl').removeClass('collapsed');
      $('.sub-menu-container').removeClass('collapse');		
    }
    if (ww < 769) {
      $('.menu-tabs-listing').removeClass('show').addClass('collapse');
      $('.tab-link').on('click', function(){$('.menu-tabs-listing').removeClass('show');																		
})		
    } else if (ww >= 770) {
      $('.menu-tabs-listing').addClass('show').removeClass('collapse');	
    }		  
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();
});



//-------------------------- CARRUSEL CAMPAIGNS

$(document).ready(function() {
    $('.campaigns-boxed').slick({
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
                breakpoint: 750,
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



//-------------------------- TABS MENU


  function show(param_div_id) {
    document.getElementById('main-tab').innerHTML = document.getElementById(param_div_id).innerHTML;
  }