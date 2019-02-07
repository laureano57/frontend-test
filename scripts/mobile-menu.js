(function(){
  $(document).ready(function() {
    $( ".mobile-navbar-close" ).click(function() {
      $( ".main-navbar-wrapper" ).animate({
        width: "toggle",
      }, 300);
    });
    $( ".menu-button" ).click(function() {
      $( ".main-navbar-wrapper" ).animate({
        width: "toggle",
      }, 300);
    });
    $( ".category-title" ).click(function() {
      $(this).siblings(".mobile-drop-menu").animate({
        height: "toggle",
      }, 300);
    });
  });
})();

