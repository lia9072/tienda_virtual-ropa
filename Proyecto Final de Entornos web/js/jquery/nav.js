$(document).ready(( ) => {{
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
			$('.menu').style='#000'
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

	$('.slider__carrusel').slick({   
	    
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000, 

      });


	  //


}});
 

 