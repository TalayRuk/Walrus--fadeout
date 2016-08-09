$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initial-showing").toggle();
    $("#initial-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#fadeincat").fadeToggle("slow");
    $("#fadeoutcat").fadeToggle();
  });
  $(".clickable3").click(function() {
    $("#dog").slideUp();
  });
  $(".clickable3").click(function() {
    $("#dog").show();
  });
});
