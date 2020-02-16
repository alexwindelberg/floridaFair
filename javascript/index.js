
// document.getElementById('date').innerHTML = new Date().toDateString();

$(window).on("resize", function() {

  if($(window).height() >= 900 ) {
    $(".jumbotron").css({ height: ($(window).height() * .712) + "px" });
  }
  else {
    $(".jumbotron").css({ height: ($(window).height() * .65)  + "px" });
  }
});



