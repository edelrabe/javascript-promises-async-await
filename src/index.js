import { fetchWithTimeout } from "./services";

const movies = require("./data/movies.json");

export function fetchMovies() {
  const resolveFunction = () => movies;
  return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then((results) => {
  console.log(results);
});

// function wait(delay) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }
// let delayedFunc = () => {
//   console.log("Done");
//   return { id: 1, name: "Bob" };
// };
// wait(3000).then(delayedFunc).then(res => console.log(res));
