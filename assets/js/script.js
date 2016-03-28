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
		$('.hidden_header').css("display", "block");
	    var hidden_menu = document.getElementById('hidden_header');
	    if (hidden_menu.className == "hidden_header show") {
	        hidden_menu.className = "hidden_header hide";
	    }
	    else {
	        hidden_menu.className = "hidden_header show";
	    }
	});
});
