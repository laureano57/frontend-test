(function() {
  $("#aside > ul > li > .filter-title").click(function() {
      var checkElement = $(this).next();
      $(this).closest("li").addClass("active");
      $(this).addClass("filter-active-title");

      if (checkElement.is(":visible")) {
        $(this).removeClass("filter-active-title");
        $(this).closest("li").removeClass("active");
        checkElement.slideUp("normal");
      } else {
        $("#cssmenu ul ul:visible").slideUp("normal");
        checkElement.slideDown("normal");
      }
  });
})();