// ? маска для номера телефона
let selector = document.querySelectorAll(`input[type="tel"]`);

let im = new Inputmask("+375 ( 99 ) 999-99-99");

im.mask(selector);

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});