$(document).ready(function() {
	$(".button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section2").offset().top - 83
	    }, 1500);
	});
	$("#signup").click(function() {
		var email = $('#email').val();
		$(".content1").css("display", "none");
		$(".hidden_content1").css("display", "block");
	});
	$(".menu_button").click(function() {
	    var hidden_menu = $('#hidden_header');
	    if (hidden_menu.is(".hidden_header.show")) {
			hidden_menu.removeClass("hidden_header show");
	        hidden_menu.addClass("hidden_header hide");
	    }
	    else {
			hidden_menu.removeClass("hidden_header hide");
	        hidden_menu.addClass("hidden_header show");
	    }
	});
});
