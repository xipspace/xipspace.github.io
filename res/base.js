/*
	get content from
*/
var content = "https://xipspace.github.io/content.json"

function cardsCreator(x){
	$(".cards").html(x)
}

$(document).ready(function () {

	$(".item").each(function(index){
		console.log(index + ": " + $(this).text())
	})

	$(".item").click(function () {

		// $(this).toggleClass("selected")
		var str = $(this).text()
		// $("." + str).toggle()
		switch (str) {
			case "main":
				$(".main").show()
				$(".showcase").hide()
				$(".design").hide()
				break
			case "showcase":
				$(".main").hide()
				$(".showcase").show()
				$(".design").hide()
				break
			case "design":
				$(".main").hide()
				$(".showcase").hide()
				$(".design").show()
				break
		}

	})

	/*
	$(".cards").load(content, function (responseTxt, statusTxt, xhr) {

		if (statusTxt == "success")
			console.debug("External content loaded successfully : " +
				xhr.getResponseHeader("content-type"))
		if (statusTxt == "error")
			console.debug("Error: " + xhr.status + ": " + xhr.statusText)

	})
	*/

	var jsonObj = $.getJSON(content)
		.done(function () {
			console.log("success")
		})
		.fail(function () {
			console.log("error")
		})
		.always(function () {
			console.log("complete")
		})

	jsonObj.always(function (data) {
		console.log(data)
		// $(".cover").attr("src", data.cards.cover)
		$(".title").text(data.cards.title)
		$(".description").text(data.cards.description)
	})

})
