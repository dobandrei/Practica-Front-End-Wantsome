let url = "https://www.googleapis.com/books/v1/volumes?q=horror";

export const requestBooks = fetch(url).then(response => response.json());
export const reqMovies = fetch(url).then(res => res.json());
export default {
  requestBooks: requestBooks,
  reqMovies: reqMovies
};