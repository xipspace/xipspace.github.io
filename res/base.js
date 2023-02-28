/*
	content setup
*/
var content = "https://xipspace.github.io/content.json"
var cardsView = "<div class='cards'><div class='cover'><img /></div><p class='title'></p><p class='description'></p></div>"

function cardsCreator(x, y, z){

	$(".cover img").last().attr("src", x)
	$(".title").last().text(y)
	$(".description").last().text(z)

}

/*
	exec
*/

$(document).ready(function () {

	/*
	$(".item").each(function (index) {
		console.log(index + ": " + $(this).text())
	})
	*/

	$(".item").click(function () {

		// $(this).toggleClass("selected")
		var str = $(this).text()
		// $("." + str).toggle()
		switch (str) {
			case "home":
				$(".home").show()
				$(".showcase").hide()
				$(".design").hide()
				break
			case "showcase":
				$(".home").hide()
				$(".showcase").show()
				$(".design").hide()
				break
			case "design":
				$(".home").hide()
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

	// cardsCreator()

	jsonObj.always(function (data) {
		// console.log(data)
		$.each(data, function (category) {
			console.log(category)
			
			$.each(this, function(elements){
				console.log(elements)
				
				$("." + category + " .container").append(cardsView)
				cardsCreator(

					this.cover,
					this.title,
					this.description

				)
			});
			
		})

	})

})
