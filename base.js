$(document).ready(function () {

  $(".item").click(function () {
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
