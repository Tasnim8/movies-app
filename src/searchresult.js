import React from 'react'
import PropTypes from 'prop-types'
class SearchResult extends React.Component{

getShelf(movie){
  let movies=this.props.movies;
  let found=false;
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].id===movie.id) {
      found=movies[i].part;
    }
  }
  return found;
}


 render(){
    return(
        <li>
        <div className="movie">
        <div className="movie-top">
        {
          this.props.result.imageLinks ?
          (
            <div className="movie-poster" style={{ width: 128, height: 193, backgroundImage:`url(${this.props.result.imageLinks.thumbnail})` }}></div>
          ):(
            <div className="movie-poster" style={{ width: 128, height: 193, backgroundImage:`url(${this.props.result.previewLink})` }}></div>
          )
        }
        <div className="movie-part-changer">
        {this.getpart(this.props.result)?(
          <select value={this.getpart(this.props.result)} onChange={(event) => this.props.onChangepart(this.props.result,event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlywatching">Currently watching</option>
          <option value="wantTowatch">Want to watch</option>
          <option value="watch">watch</option>
          <option value="none" >None</option>
          </select>
        ):
          (<select value="none" onChange={(event) => this.props.onChangepart(this.props.result,event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlywatching">Currently watching</option>
          <option value="wantTowatch">wantTowatch</option>
          <option value="watch">watch</option>
          <option value="none" >None</option>
          </select>
        )}
        </div>
        </div>
        <div className="movie-name">{this.props.result.name}</div>
        </div>
        </li>
    )
  }

}

SearchResult.propTypes={
  books:PropTypes.array.isRequired,
  onChangepart:PropTypes.func.isRequired,
  result:PropTypes.object.isRequired
}

export default SearchResult
