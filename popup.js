function popupOpenClose(popup) {
	
	/* Open popup */
	$(popup).fadeIn(250);

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("div[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).fadeOut();
	});
}

$(document).ready(function () {
	$("#project1").on("click", function() {
		popupOpenClose($(".popup1"));
	});
});

$(document).ready(function () {
	$("#project2").on("click", function() {
		popupOpenClose($(".popup2"));
	});
});

$(document).ready(function () {
	$("#project3").on("click", function() {
		popupOpenClose($(".popup3"));
	});
});

