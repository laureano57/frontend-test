$(document).ready(function() {
  $( ".mobile-navbar-close" ).click(function() {
    $( ".main-navbar-wrapper" ).animate({
      width: "toggle",
    }, 300, function() {
    });
  });
  $( ".menu-button" ).click(function() {
    $( ".main-navbar-wrapper" ).animate({
      width: "toggle",
    }, 300, function() {
    });
  });
  $( ".category-title" ).click(function() {
    $(this).siblings(".mobile-drop-menu").animate({
      height: "toggle",
    }, 300, function() {
    });
  });
})