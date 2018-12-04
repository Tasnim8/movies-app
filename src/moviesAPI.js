const api = "https://api.themoviedb.org/3/movie/550?api_key=f93c594dda3d65cea6d3ad479d7d38ab&fbclid=IwAR1Y3VWbY5XwFQpxCi-_8zgrjfdOhn3c6UGk1hvZ830lvzq8-AGsrvf-L94"

const headers = {
  'Accept': 'application/json',
  'url':https://api.themoviedb.org/3/trending/movies/day?api_key=f93c594dda3d65cea6d3ad479d7d38ab&fbcl
}

export const get = () =>
  fetch(`${api}/movies/${movieId}`, {headers })
   { .then(res => res.json())
    .then(data => data.movie)


    export const update = (movie, part) =>
  fetch(`${api}/movies/${movie.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ part})
  }).then(res => res.json())


export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.movies)