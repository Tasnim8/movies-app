const api = "https://api.themoviedb.org/3/movie/550?api_key=f93c594dda3d65cea6d3ad479d7d38ab&fbclid=IwAR1Y3VWbY5XwFQpxCi-_8zgrjfdOhn3c6UGk1hvZ830lvzq8-AGsrvf-L94"



export const get = () =>
  fetch(`https://api.themoviedb.org/3/trending/movies/day?api_key=f93c594dda3d65cea6d3ad479d7d38ab&fbcl`)
   .then(res => res.json())
    .then(data => data.movie)


    //export const update = (movie, part) =>
  //fetch( {
   // method: 'PUT',
    //headers: {
      //...headers,
      //'Content-Type': 'application/json'
   // },
    //body: JSON.stringify({ part})
 // }).then(res => res.json())


export const search = (query) =>
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=f93c594dda3d65cea6d3ad479d7d38ab&fbcl&language=en-US&page=1&include_adult=false&query=${query}`)
  .then(res => res.json())
  .then(data => data.movies)