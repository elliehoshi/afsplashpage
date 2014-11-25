$(document).ready(function(){
	console.log("hello");

  $("#main-site-button").on('click', function(e){
    e.preventDefault();
    console.log("clicked button");
    $('html, body').animate({
      scrollTop: $("#main-content").offset().top
    }, 300);
  });

});