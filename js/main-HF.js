jQuery(document).ready(function($) {
	
var stickyOffset = $('.main-menu').offset().top;

$(window).scroll(function(){
  var sticky = $('.main-menu'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
	
	
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 991) {
      $('.menu-container').addClass('offcanvas offcanvas-start').attr("visibility", "visible");
      $('.submenu-collapse').removeClass('show');
      $('.first-lvl').addClass('collapsed').attr('data-bs-toggle', 'collapse');
      $('.second-lvl').addClass('collapsed').attr('data-bs-toggle', 'collapse');
      $('.sub-menu-container').addClass('collapse');		
    } else if (ww >= 990) {
      $('.menu-container').removeClass('offcanvas offcanvas-start').attr("visibility", "hidden");
      $('.submenu-collapse').addClass('show');
      $('.first-lvl').removeClass('collapsed');	
      $('.second-lvl').removeClass('collapsed');
      $('.sub-menu-container').removeClass('collapse');		
    }
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
	

	
});


