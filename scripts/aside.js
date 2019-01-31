$("#aside > ul > li > .filter-title").click(function() {
    var checkElement = $(this).next();
    $("#aside li").removeClass("active");
    $(this).closest("li").addClass("active");

    if (checkElement.is(":visible")) {
      $(this).closest("li").removeClass("active");
      checkElement.slideUp("normal");
    }
    if (!checkElement.is(":visible")) {
      $("#cssmenu ul ul:visible").slideUp("normal");
      checkElement.slideDown("normal");
    }
})