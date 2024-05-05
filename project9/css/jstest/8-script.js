$.get(
  "https://swapi-api.alx-tools.com/api/films/?format=json",
  function (data) {
    $.each(data.results, function (index, item) {
      const MovieTitle = item["title"];
      const listItem = $("<li></li>").text(MovieTitle);
      const listMovies = $("ul#list_movies");
      listMovies.append(listItem);
    });
  }
);
