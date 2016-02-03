$(function() {

	$("#phone, #phone2, #phone3, #phone4, #phone5").mask("+7 (999) 999-9999");

	$(".popup").magnificPopup();

	$(".menu ul li a").mPageScroll2id();

	// Set options
	 var options = {
	 	offset: '#showHere',
	 	offsetSide: 'top',
	 	classes: {
	 		clone:   'banner--clone',
	 		stick:   'banner--stick',
	 		unstick: 'banner--unstick'
	 	}
	 };

        // Initialise with options
        var banner = new Headhesive('.banner', options);

        // Headhesive destroy
        // banner.destroy();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.open({
					items: {
						src: '.done'
					},
					type: 'inline'
				});
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
