// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author

import myRequest from "./module";
console.log(myRequest);
myRequest.requestBooks.then(res => console.log(res));
//reqMovies.then(res => console.log(res));