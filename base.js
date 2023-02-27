$(document).ready(function () {

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

	$("button").click(function () {

		var contentLoad = "https://raw.githubusercontent.com/xipspace/xipspace.github.io/main/README.md";

		$(".main").load(contentLoad, function (responseTxt, statusTxt, xhr) {

			if (statusTxt == "success")
				console.debug("External content loaded successfully!");
			if (statusTxt == "error")
				console.debug("Error: " + xhr.status + ": " + xhr.statusText);

		});

	});

});
