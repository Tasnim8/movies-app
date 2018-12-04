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
        <div className="movie-poster" style={{ width: 128, height: 193, backgroundImage:`url()` }}></div>
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