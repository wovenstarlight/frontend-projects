var form = $("#subscribe");
var javainput = document.getElementById("email"); // for validity checks

$("#email").keyup( function() {
	// check for emptiness
	if (!$(this).val()) { // no text
		form.addClass("empty");
	}
	else {
		form.removeClass("empty");
	}

	// check for invalidity
	if (javainput.validity.valid) {
		form.addClass("error");
	}
	else {
		form.removeClass("error");
	}
});