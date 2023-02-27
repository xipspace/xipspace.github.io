$(document).ready(function () {

	var content = "https://xipspace.github.io/content.json";

	$(".cards").load(content, function (responseTxt, statusTxt, xhr) {

		if (statusTxt == "success")
			console.debug("External content loaded successfully : " +
				xhr.getResponseHeader("content-type"));
		if (statusTxt == "error")
			console.debug("Error: " + xhr.status + ": " + xhr.statusText);

	});

	$(".item").click(function () {

		// $(this).toggleClass("selected");
		var str = $(this).text();
		// $("." + str).toggle();
		switch (str) {
			case "main":
				$(".main").show();
				$(".showcase").hide();
				$(".design").hide();
				break;
			case "showcase":
				$(".main").hide();
				$(".showcase").show();
				$(".design").hide();
				break;
			case "design":
				$(".main").hide();
				$(".showcase").hide();
				$(".design").show();
				break;
		}

	});

});
