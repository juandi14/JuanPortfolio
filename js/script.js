$(document).ready(function() {

    $(".reveal").click(function() {
    	event.preventDefault();
    	$(".resume-text").toggle("slow");
    	})

    $(".hamburger").click(function() {
        $("#dropdown").toggle("slow");
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

