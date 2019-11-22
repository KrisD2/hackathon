// jshint esversion:6

$(function() {
  $('.food').on('click', function() {
    $(this).fadeOut(1000);
    $(this).next().delay(1000).fadeIn(2000);
    $('.food').off('click');
  });
});
