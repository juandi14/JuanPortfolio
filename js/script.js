$(document).ready(function() {

    $(".reveal").click(function() {
    	event.preventDefault();
    	$(".resume-text").slideToggle();
    	})

    $(".hamburger").click(function() {
        $("#dropdown").slideToggle();
   	   }
   );

    $(".scroll-up").click(function() {
    	$("html, body").animate({scrollTop: 0}, "slow");
    })
}); 