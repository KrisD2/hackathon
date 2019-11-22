// jshint esversion:6

$(function() {
  $('img').on('click', function() {
    $(this).fadeOut(1000);
    $(this).next().fadeIn(2000);
  });
});
