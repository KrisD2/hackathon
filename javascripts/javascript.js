// jshint esversion:6

$(function() {
  $('img').on('click', function() {
    $(this).fadeOut(1000);
    $(this).next().delay(1000).fadeIn(2000);
  });
});
