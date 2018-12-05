import React from 'react'
import PropTypes from 'prop-types'
class moviecomp extends React.Component{
  render(){
    let movies=this.props.movies;
    let part=this.props.part;
    let filteredmovies=movies.filter((movies)=>movies.part=== part)
    return (
      filteredmovies.map((movies)=>(<li key={movies.id} >
        <div className="movie">
        <div className="movie-top">
        <div className="movie-poster" style={{ width: 128, height: 193, backgroundImage:`url(https://api.themoviedb.org/3/movie/550/images?api_key=f93c594dda3d65cea6d3ad479d7d38ab&fbcl&language=en-US&include_image_language=en,null` }}></div>
        <div className="movie-part-changer">
        <select value={part} onChange={(event) => this.props.onChangepart(movies,event.target.value)}>
        <option value="move" disabled> Move to...</option>
        <option value="currentlywatch">Currently watch</option>
        <option value="wantTowatch">Want to watch</option>
        <option value="watch">watch </option>
        <option value="none" >None </option>
        </select>
        </div>
        </div>
        <div className="movies-title">{movies.name}</div>

        </div>
        </li>
      ))
      )
  }
}