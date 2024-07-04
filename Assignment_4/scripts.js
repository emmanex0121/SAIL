const submitBtn = document.getElementById("submit-btn");
const movieList = document.getElementsByClassName("section_images")[0];
console.log(movieList);

function addMovie() {
  const titleInput = document.getElementsByName("movie_title")[0];
  const imageInput = document.getElementsByName("movie_cover_link")[0];

  console.log('hehehe')
  console.log(titleInput, imageInput);

  const movie = document.createElement("div");
  const movieImage = document.createElement("img");
  const movieTitle = document.createElement("h3");

  movieImage.src = imageInput.value;
  movieTitle.textContent = titleInput.value;

  movie.classList.add('movies_container');
  movie.appendChild(movieImage);
  movie.appendChild(movieTitle);
  movieList.appendChild(movie);
  
    //clear input field
    imageInput.value = '';
    titleInput.value = '';
}

submitBtn.addEventListener("click", addMovie);
