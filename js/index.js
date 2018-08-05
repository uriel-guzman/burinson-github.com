$("#nav_language").click(function() {
	$(".spanish").toggle();
	$(".english").toggle();
});

$("#show").click(function() {
	$("#mobile_hide").show();
	$("#show").hide();
	$("#hide").show();
});

$("#hide").click(function() {
	$("#mobile_hide").hide();
	$("#show").show();
	$("#hide").hide();
});

$(window).resize(function() {
	if ($(window).width() < 540) {
		$("#mobile_hide").hide();
		$("#show").show();
		$("#hide").hide();
	} else {
		$("#mobile_hide").show();
		$("#show").hide();
		$("#hide").hide();
	}
});

if ($(window).width() < 540) {
	$("#navbar #mobile_hide li").click(function() {
		$("#mobile_hide").hide();
		$("#show").show();
		$("#hide").hide();
	});
}

$(window).resize(function() {
	if ($(window).width() < 540) {
		$("#navbar #mobile_hide li").click(function() {
			$("#mobile_hide").hide();
			$("#show").show();
			$("#hide").hide();
		});
	}
});

$(window).resize(function() {
	if ($(window).width() > 540) {
		$("#navbar #mobile_hide li").click(function() {
			$("#mobile_hide").show();
			$("#show").hide();
			$("#hide").hide();
		});
		
	}
});