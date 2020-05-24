function popupOpenClose(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(plant_popup).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup */
	$(plant_popup).show();

	/* Close popup if user clicks on background */
	$(plant_popup).click(function(e) {
		if ( e.target == this ) {
			if ($(plant_popup).is(':visible')) {
				$(plant_popup).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(plant_popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(plant_popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".plant_popup"));
	});
});