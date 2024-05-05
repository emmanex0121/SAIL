$(document).ready(function () {
  $("div#add_item").on("click", function () {
    const listItem = $("<li></li>").text("Item");
    $("ul.my_list").append(listItem);
  });

  $("div#remove_item").on("click", function () {
    $("ul.my_list li:last").remove();
  });

  $("div#clear_list").click(function () {
    $("ul.my_list li").remove();
    // $('ul.my_list').empty();
  });
});