const apiKey = "14cda2aec3e124ead30b26a4e6da7ae8";
const posterBaseURL = "https://image.tmdb.org/t/p/w500";
async function fetchMovies() {
  const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=14cda2aec3e124ead30b26a4e6da7ae8";
  const response = await fetch(url);
  const data = await response.json();
  return data.results || [];

}

function displayMovies(movies) {
  const movieSingle = document.querySelector(".moviesList");
  movieSingle.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const picture =document.createElement("img");
    picture.classList.add("movie-poster");
    picture.src =  posterBaseURL + movie.poster_path;

    const title = document.createElement("h2");
    title.classList.add("movie-title");
    title.textContent = movie.original_title;

    const summary = document.createElement("p");
    summary.classList.add("movie-summary");
    summary.textContent = movie.overview;

    const imdb = document.createElement("p");
    imdb.classList.add("movie-imdb");
    imdb.textContent = movie.vote_average;

    const button  = document.createElement("button");
    button.classList.add("button");

    movieCard.appendChild(picture);
    movieCard.appendChild(title);
    movieCard.appendChild(summary);
    movieCard.appendChild(imdb);
    movieCard.appendChild(button);
    

    movieSingle.appendChild(movieCard);
  });
}
function handleFetchError(error) {
    console.log('Error fetching latest movies:', error);
}

async function latestMovies(){
    try{
        const loadMovies = await fetchMovies();
        displayMovies(loadMovies)
    }
    catch (error) {
        handleFetchError(error);
    }
}

latestMovies();