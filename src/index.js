import { fetchWithTimeout, fetchMovies, fetchBooks } from "./services";

const movies = require("./data/movies.json");

function getBooksAndMovies() {
  return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({ books, movies }))
    .catch((err) => console.error("Error fetching books and movies", err));
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then((results) => {
  console.log("getBooksAndMoviesPromise", results);
});

function getBooksOrMovies() {
  return Promise.race([fetchBooks(), fetchMovies()])
    .then((results) => results)
    .catch((error) => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then((results) => {
  console.log("getBooksOrMoviesPromise", results);
});

// function wait(delay) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }
// let delayedFunc = () => {
//   console.log("Done");
//   return { id: 1, name: "Bob" };
// };
// wait(3000).then(delayedFunc).then(res => console.log(res));
