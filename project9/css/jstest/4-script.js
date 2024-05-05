$("#toggle_header").on("click", function () {
    const header = $('header')
    if (header.hasClass("green")) {
    header.addClass("red");
    header.removeClass("green");
  } else {
    header.addClass("green");
    header.removeClass("red");
  }
});
