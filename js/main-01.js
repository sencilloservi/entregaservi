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


//-------------------------- SELECT PERSONALIZADO

$('#type-search').each(function () {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


//-------------------------- CARRUSEL DESTACADOS

$(document).ready(function() {
    $('.featured-boxed').slick({
        dots: true,
        arrow: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }


        ]
    });
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


$(document).ready(function() {
    $('.promos-boxed').slick({
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


//-------------------------- CAMBIO PLACEHOLDER EN CONSULTA


$('#info-number').each(function() {
    $(this).data('placeholder', $(this).attr('placeholder'));
});

function changePlaceholder() {
    if( $(window).width() < 520 ){
        $('#info-number').attr('placeholder','# de guía');
    } else {
        $('#info-number').each(function() {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }   
}

$(window).resize( changePlaceholder ).trigger('resize');