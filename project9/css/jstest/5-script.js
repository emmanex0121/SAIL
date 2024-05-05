$("#add_item").click(function () {
  const myList = $("ul.my_list");
  const listItem = $("<li></li>").text("Item");
  myList.append(listItem);
});