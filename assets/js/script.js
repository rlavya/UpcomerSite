$(document).ready(function() {
	debugger;
	$(".button").click(function() {
		debugger;
	    $('html, body').animate({
	        scrollTop: $("#section2").offset().top - 83
	    }, 1500);
	});
});
function signup() {
	var email = $('#email').val();
	$(".content1").css("display", "none");
	$(".hidden_content1").css("display", "block");
}