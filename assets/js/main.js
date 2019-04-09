$(document).ready(function() {


	$(".button").click(function() {
		$(".wrapper").toggle();
		if ( $('.Statement').css('visibility') == 'hidden' )
		$('.Statement').css('visibility','visible');
		else
		$('.Statement').css('visibility','hidden');
	}); 


	$('#play-pause').click(function(){
		
	  });

	$('.main').scroll(function (){

	if ($(this).scrollTop() > 30000) {
			$('.main-image-sticky-1').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 30000) {
			$('.main-image-sticky-1').css('visibility', 'visible')
			// $('.wrapper').css('background', 'blue')
		}

	if ($(this).scrollTop() > 35500) {
			$('.main-image-sticky-2').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 35500) {
			$('.main-image-sticky-2').css('visibility', 'visible')
		}


	if ($(this).scrollTop() > 48000) {
			$('.main-image-sticky-3').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 48000) {
			$('.main-image-sticky-3').css('visibility', 'visible')
		}


	if ($(this).scrollTop() > 64000) {
			$('.main-image-sticky-4').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 64000) {
			$('.main-image-sticky-4').css('visibility', 'visible')
		}


	if ($(this).scrollTop() > 85000) {
			$('.main-image-sticky-5').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 85000) {
			$('.main-image-sticky-5').css('visibility', 'visible')
		}


	if ($(this).scrollTop() > 99762) {
			$('.main-image-sticky-6').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 99762) {
			$('.main-image-sticky-6').css('visibility', 'visible')
		}


	if ($(this).scrollTop() > 120182) {
			$('.main-image-sticky-7L').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 120182) {
			$('.main-image-sticky-7L').css('visibility', 'visible')
		}

	if ($(this).scrollTop() > 141257) {
			$('.main-image-sticky-7').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 141257) {
			$('.main-image-sticky-7').css('visibility', 'visible')
		}
	if ($(this).scrollTop() > 141257) {
			$('.main-image-sticky-7S').css('visibility', 'hidden')
		}
	if ($(this).scrollTop() < 141257) {
			$('.main-image-sticky-7S').css('visibility', 'visible')
		}

		var scrollPos = $(this).scrollTop();
		$('.scrollCount').text(scrollPos);


		if ($(this).scrollTop() < 1534 ) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'hidden')
		}
		if ($(this).scrollTop() > 1534 ) {
			$('.desc1').css('visibility', 'visible')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'hidden')
			}

		if ($(this).scrollTop() > 29916) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'visible')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'hidden')
			}

		if ($(this).scrollTop() > 35699) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'visible')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'hidden')
			}

		if ($(this).scrollTop() > 48061) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'visible')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'hidden')
			}

		if ($(this).scrollTop() > 64091) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'visible')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'hidden')
			}

		if ($(this).scrollTop() > 85965) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'visible')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'hidden')
			}

		if ($(this).scrollTop() > 99762) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'visible')
			$('.desc8').css('visibility', 'hidden')
			}

		if ($(this).scrollTop() > 141256) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'visible')
			}

		if ($(this).scrollTop() > 166078) {
			$('.desc1').css('visibility', 'hidden')
			$('.desc2').css('visibility', 'hidden')
			$('.desc3').css('visibility', 'hidden')
			$('.desc4').css('visibility', 'hidden')
			$('.desc5').css('visibility', 'hidden')
			$('.desc6').css('visibility', 'hidden')
			$('.desc7').css('visibility', 'hidden')
			$('.desc8').css('visibility', 'hidden')
			}

	});

	$(".top").click(function() {
		$(".main").scrollTop(0);
	}); 
	$(".bottom").click(function() {
		$(".main").scrollTop(166078);
	}); 

	$(".category0").click(function() {
		$(".main").scrollTop(673);
	}); 
	$(".category1").click(function() {
		$(".main").scrollTop(1535);
	}); 
	$(".category2").click(function() {
		$(".main").scrollTop(29917);
	});
	$(".category3").click(function() {
		$(".main").scrollTop(35700);
	});
	$(".category4").click(function() {
		$(".main").scrollTop(48062);
	});
	$(".category5").click(function() {
		$(".main").scrollTop(64092);
	});
	$(".category6").click(function() {
		$(".main").scrollTop(85966);
	});
	$(".category7").click(function() {
		$(".main").scrollTop(99763);
	});
	$(".category8").click(function() {
		$(".main").scrollTop(141257);
	});
});