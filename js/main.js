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




var Set_Cookie = function(name, value, expires, path, domain, secure) {
	var today = new Date();
	today.setTime(today.getTime());
	if (expires) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date(today.getTime() + (expires));
	document.cookie = name + "=" + escape(value)
			+ ((expires) ? ";expires=" + expires_date.toGMTString() : "")
			+ ((path) ? ";path=" + path : "")
			+ ((domain) ? ";domain=" + domain : "")
			+ ((secure) ? ";secure" : "");
};
var Get_Cookie = function(check_name) {
	var a_all_cookies = document.cookie.split(';');
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false;
	for (var i = 0; i < a_all_cookies.length; i++) {
		a_temp_cookie = a_all_cookies[i].split('=');
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
		if (cookie_name == check_name) {
			b_cookie_found = true;
			if (a_temp_cookie.length > 1)
				cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g,
						''));
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if (!b_cookie_found)
		return null;
};
var locationA1 = location.href;
var path = locationA1.split('/')[5];
var coookieUserName = 'user';
var cookiePassName = 'pass';
var cookiePath = '/wps/portal/' + path;
if (path == 'inicio')
	var cookiePath = '/wps/portal';
var cookieDomain = '';
var idUserField = 'userID';
var idPassField = 'password';
var userName = Get_Cookie(cookiePath + coookieUserName);
var password = Get_Cookie(cookiePath + cookiePassName);
var setRemember = function() {
	var remember = document.getElementById('rememberMe').checked;
	var user;
	var pass;
	if (remember) {
		user = document.getElementById(idUserField).value;
		pass = document.getElementById(idPassField).value;
		Set_Cookie(cookiePath + coookieUserName, user, 365, '/', null, null);
		Set_Cookie(cookiePath + cookiePassName, pass, 365, '/', null, null);
	}
};
var Delete_Cookie = function(name, path, domain) {
	if (Get_Cookie(name))
		document.cookie = name + "=" + ((path) ? ";path=" + path : "")
				+ ((domain) ? ";domain=" + domain : "")
				+ ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
};
var deleteRemember = function(remen) {
	coookieUserName = 'user';
	cookiePassName = 'pass';
	if (remen.checked == false) {
		Delete_Cookie(cookiePath + coookieUserName, '/', null);
		Delete_Cookie(cookiePath + cookiePassName, '/', null);
	}
};
var req;
var reqCountry;
var reqIdentType;
function validate() {
	var idField = document.getElementById("userIdPortal");
	var countTime = '0';
	var url = "/LdapLoginInactive/ldapServlet?userId="
			+ encodeURIComponent(idField.value) + "&countTime="
			+ encodeURIComponent(countTime);
	if (typeof XMLHttpRequest != "undefined")
		req = new XMLHttpRequest();
	else if (window.ActiveXObject)
		req = new ActiveXObject("Microsoft.XMLHTTP");
	req.open("GET", url, true);
	req.onreadystatechange = callback;
	req.send(null);
}
function showCID() {
	var select = document.getElementById("userType");
	var optionselected = select.selectedIndex;
	var value = select.options[select.selectedIndex].value;
	var idField = 1;
	try {
		idField = document.getElementById("ID_PAIS").value;
	} catch (err) {
		idField = 1;
	}
	if (idField == null)
		idField = 1;
	var url = "/LdapLoginInactive/CountryServlet?idPais="
			+ encodeURIComponent(idField);
	var ele1 = document.getElementById("countryLogin");
	var ele2 = document.getElementById("identificationLogin");
	if (value == 1) {
		if (ele1.style.display == "block")
			ele1.style.display = "none";
		else
			ele1.style.display = "block";
		if (ele2.style.display == "block")
			ele2.style.display = "none";
		else
			ele2.style.display = "block";
		if (typeof XMLHttpRequest != "undefined")
			reqCountry = new XMLHttpRequest();
		else if (window.ActiveXObject)
			reqCountry = new ActiveXObject("Microsoft.XMLHTTP");
		reqCountry.open("GET", url, true);
		reqCountry.onreadystatechange = callbackCountry;
		reqCountry.send(null);
		selectIdentiType(idField);
	} else {
		if (ele1.style.display == "block")
			ele1.style.display = "none";
		if (ele2.style.display == "block")
			ele2.style.display = "none";
	}
	select.selectedIndex = optionselected;
}
function concatHidden(idIdenType) {
	var select = document.getElementById("userType");
	var optionselected = select.selectedIndex;
	var inputHid = document.getElementById("userType");
	var n = inputHid.value.split("|");
	inputHid.value = n[0] + "|" + idIdenType + "|" + n[1];
	select.selectedIndex = optionselected;
}
function selectIdentiType(idCountry) {
	var select = document.getElementById("userType");
	var optionselected = select.selectedIndex;
	var mdiv = document.getElementById("divMessage");
	mdiv.innerHTML = "";
	if (idCountry == -1)
		mdiv.innerHTML = "<span></span>";
	else {
		var inputHid = document.getElementById("userType");
		inputHid.value = idCountry + "|"
				+ document.getElementById("userID").value;
		var url = "/LdapLoginInactive/IdentificationTypeServlet?idPais="
				+ encodeURIComponent(idCountry);
		if (typeof XMLHttpRequest != "undefined")
			reqIdentType = new XMLHttpRequest();
		else if (window.ActiveXObject)
			reqIdentType = new ActiveXObject("Microsoft.XMLHTTP");
		reqIdentType.open("GET", url, true);
		reqIdentType.onreadystatechange = callbackIdentType;
		reqIdentType.send(null);
	}
	select.selectedIndex = optionselected;
}
function callback() {
	if (req.readyState == 4) {
		if (req.status == 200)
			parseMessage();
	}
}
function callbackCountry() {
	if (reqCountry.readyState == 4) {
		if (reqCountry.status == 200)
			parseMessageCountry();
	}
}
function callbackIdentType() {
	if (reqIdentType.readyState == 4) {
		if (reqIdentType.status == 200)
			parseMessageIdentType();
	}
}
function parseMessage() {
	var message = req.responseXML.getElementsByTagName("message")[0];
	var message2 = message.childNodes[0].nodeValue;
	if (message2 == "valid") {
		Delete_Cookie(cookiePath + "pass2", '/', null);
		Set_Cookie(cookiePath + "pass2",
				document.getElementById(idPassField).value, 365, '/', null,
				null);
		var value;
		var select = document.getElementById("userType");
		value = select.options[select.selectedIndex].value;
		var continueSubmit = 1;
		var mdiv = document.getElementById("divMessage");
		if (value == -1) {
			mdiv.innerHTML = "";
			mdiv.innerHTML = "<span>Tipo de usuario inv�lido.</span>";
			continueSubmit = 2;
		}
		if (value == 1) {
			var inputHid = document.getElementById("userIdCon");
			mdiv.innerHTML = "";
			var n = inputHid.value.split("|");
			if (n.length < 3) {
				mdiv.innerHTML = "<span>Tipo de documento inv�lido.</span>";
				continueSubmit = 2;
			} else
				document.getElementById("userIdPortal").value = inputHid.value;
		} else
			document.getElementById("userIdPortal").value = document
					.getElementById("userID").value;
		if (continueSubmit == 1)
			document.LoginForm.submit();
	} else
		setMessage(message2);
}
function parseMessageCountry() {
	var message = reqCountry.responseXML;
	var mdiv = document.getElementById("countryDiv");
	var xmlString;
	if (message.xml)
		xmlString = message.xml;
	else
		xmlString = (new XMLSerializer()).serializeToString(message);
	mdiv.innerHTML = xmlString;
}

function parseMessageIdentType() {
	var message = reqIdentType.responseXML;
	var mdiv = document.getElementById("identificationDiv");
	var xmlString;
	if (message.xml)
		xmlString = message.xml;
	else
		xmlString = (new XMLSerializer()).serializeToString(message);
	mdiv.innerHTML = xmlString;
}
function setMessage(message) {
	var mdiv = document.getElementById("divMessage");
	mdiv.innerHTML = message;
}
function loginUser() {
	var username = "";
	var userID = document.getElementById("userID");
	if (userID==""){
		alert("Debe ingresar un nombre de usuario");
		return false;
	}
	var usertype = document.getElementById("userType");
	var usertypeValue = usertype.options[usertype.selectedIndex].value;
	if (usertypeValue=="-1"){
		alert("Debe seleccionar un tipo de usuario");
		return false;
	}
	if (usertypeValue=="1") {
		var identificationId = document.getElementById("identificationId");
		var identificationValue = identificationId.options[identificationId.selectedIndex].value;
		if (identificationValue=="-1") {
				alert("Debe seleccionar un pa�s y tipo de documento.");
				return false;
		}
		username = usertypeValue+"|"+identificationValue+"|"+userID.value;
	} else 
		username+=userID.value;
	var password = document.getElementById("password");
	if (password==""){
		alert("Debe ingresar una contrase�a");
		return false;
	}
	document.getElementById("userIdPortal").value = username;
	document.getElementById("loginForm").submit();
}
function showFormLoginJS() {
	document.getElementById('containerFormLogin').innerHTML = document.getElementById('containerFormLoginPortlet').innerHTML; 
	document.getElementById('containerFormLogin').className="bg_buscador_rast txt_center bg_login animated fadeInUp showLogin";
}
var textMSGLoginFail = document.getElementById("divMessage"); 
if (textMSGLoginFail!=null && textMSGLoginFail.innerHTML.length>1) {
	showFormLoginJS();
}



//-------------------------- STICKY TABS MENU RESPONSABILITY	

$(window).scroll(function() {

    if ($(this).scrollTop() > 490) {
        $('.responsability-sidebar-floating').addClass('sticky-responsability');
    } else {
        $('.responsability-sidebar-floating').removeClass('sticky-responsability');
    }
});

//-------------------------- STICKY TABS MENU TYC

$(window).scroll(function() {

    if ($(this).scrollTop() > 293) {
        $('.tyc-sidebar-floating').addClass('sticky-tyc');
    } else {
        $('.tyc-sidebar-floating').removeClass('sticky-tyc');
    }
});




//-------------------------- STICKY TABS MENU BRAND	 DESKTOP

$(window).scroll(function() {

    if ($(this).scrollTop() > 230) {
        $('.brand-sidebar-floating').addClass('sticky-responsability');
    } else {
        $('.brand-sidebar-floating').removeClass('sticky-responsability');
    }
});


//-------------------------- STICKY TABS MENU BRAND	 MOBILE

$(window).scroll(function() {

    if ($(this).scrollTop() > 225) {
        $('.mobile').addClass('sticky-responsability');
    } else {
        $('.mobile').removeClass('sticky-responsability');
    }
});


//-------------------------- TOGGLE TABS MENU BRAND	MOBILE


$(".item-brand").click(function() {
    $("#branding").toggleClass('show');
});


//-------------------------- TABS MENU


  function show(param_div_id) {
    document.getElementById('main-tab').innerHTML = document.getElementById(param_div_id).innerHTML;
  }

	const $items = $(".branding-listing .item-brand");

	$items.on("click", function() {
	  $items.removeClass("active");
	  $(this).addClass("active");
	});

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
      $('.brand-sidebar').removeClass('brand-sidebar-floating');
      $('.brand-sidebar').addClass('mobile');		
      $('.menu-tabs-listing').removeClass('branding');
    } else if (ww >= 770) {
      $('.menu-tabs-listing').addClass('show');	
      $('.brand-sidebar').addClass('brand-sidebar-floating');	
      $('.menu-tabs-listing').addClass('branding');	
      $('.brand-sidebar').removeClass('mobile');			
    }	  
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();
});

//------ Noticias Compartir

$(document).on('click', ".text-decoration-none", function() {	
	var url = window.location.href;
	var title = document.title;
	
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
	
	//Boton Facebook
	if($(this).hasClass('icon-facebook-logo')){	
		url = 'https://www.facebook.com/sharer/sharer.php?u='+url+'&t='+title;

	//Boton Twitter
	}else if($(this).hasClass('icon-twitter-logo-silhouette')){
		
		url = 'https://twitter.com/intent/tweet?text='+title+'&url='+url+'&via=';
	
	
//Boton Linkedin
	}else if($(this).hasClass('icon-linkedin-logo')){		
		url = 'http://www.linkedin.com/shareArticle?url='+url;
	
	//Boton correo electronico
	}else if($(this).hasClass('maill')){
		url = 'mailto:?subject='+title+'&body='+url;	
		
	//Ningun boton valido
	}else return;
	
	//Abrimos la url
	window.open(url, '_blank');			
});

 

