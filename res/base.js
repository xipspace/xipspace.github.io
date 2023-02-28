/*
	content setup
*/
var content = "https://xipspace.github.io/content.json"
var cardsView = "<div class='cards'><div class='cover'><img /></div><p class='title'></p><p class='description'></p></div>"

function cardsCreator(){
	$(".container").html(cardsView)
}

function cardsElements(x, y, z) {
	$(".cover img").attr("src", x)
	$(".title").text(y)
	$(".description").text(z)
}

/*
	exec
*/

$(document).ready(function () {

	$(".item").each(function (index) {
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

	cardsCreator()

	jsonObj.always(function (data) {
		console.log(data)
		cardsElements(
			data.cards.cover,
			data.cards.title,
			data.cards.description
		)
	})

})
