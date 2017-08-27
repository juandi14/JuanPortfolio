$(document).ready(function() {

    $(".reveal").click(function() {
    	event.preventDefault();
    	$(".resume-text").fadeToggle("slow");
    	})

    $(".hide").click(function() {
        event.preventDefault();
        $(".resume-text").slideToggle("slow");
    })

    $(".hamburger").click(function() {
        $("#dropdown").slideToggle("slow");
   	   }
   );

    $(".scroll-up").click(function() {
    	$("html, body").animate({scrollTop: 0}, "slow");
    })

	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if (y >280) {
	    $('.scroll-up').fadeIn();
	  } else {
	    $('.scroll-up').fadeOut();
	  }

	});
})

