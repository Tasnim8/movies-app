import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as moviesAPI from './moviesAPI'
import './App.css'
import moviecomp from './moviecomp.js'
import SearchResult from './searchresult.js'
class moviesApp extends React.Component {
  state = {
   movies: [],
    query:'',
    results:[],
  }
// get the request 
  componentDidMount(){
    moviesAPI.get().then((movies)=>{
      this.setState({movies})
    })
  }

  //updatemovie= (movie,part) =>{
   //moviesAPI.update(movie,part);
   // moviesAPI.get().then((movies)=>{
      //this.setState({movies})
    //})
  //}

  updateQuery = (query)=>{
    if(query!==''){
    this.setState({query:query})
    moviesAPI.search(query.trim()).then((results)=>{
      if(results.error){
        this.setState({results:[]})
      }
      else{
        this.setState({results:results})
      }
    })
  }
  else{
    this.setState({query: ''})
  }
  }

clearResults=()=>{
  this.setState({query: '',results:[]})
}

  render() {
    return (
      <div className="app">

      <Route exact path="/Addmovie" render={()=>(
          <div className="search-movie">
            <div className="search-movie-bar">
              <Link to="/" className="close-search" onClick={this.clearResults}>Close</Link>
              <div className="search-movies-input-wrapper">
                <input type="text" placeholder="Search by name or keyword"  onChange={(event)=>this.updateQuery(event.target.value)}/>
              </div>
            </div>

            {this.state.query!=='' && this.state.results.length !==0 &&
            <div className="search-movies-results">
            <ol className="movies-grid">
            {
              this.state.results.map((result)=>(
              <SearchResult key={result.id} result={result} movies={this.state.movies} onChangeShelf={this.updatemovie} />

              ))
            }
            </ol>
            </div>
          }
            </div>
             )}/>
      <Route exact path="/"  render={()=>(
          <div className="list-movies">
            <div className="list-movies-name">
              <h1>Mymovies</h1>
            </div>
            <div className="list-movies-content">
              <div>
                <div className="moviepart">
                  <h2 className="moviepart-name">Currently watching</h2>
                  <div className="moviepart-movies">
                    <ol className="movies-grid">
                      <moviecomp movies={this.state.movies} part="currentlywatching" onChangepart={this.updatemovie}/>
                    </ol>
                  </div>
                </div>
                <div className="moviepart">
                  <h2 className="moviepart-name">Want to watch</h2>
                  <div className="moviepart-movies">
                    <ol className="movies-grid">
                      <moviecomp movies={this.state.movies} part="wantTowatch" onChangemovie={this.updatemovie}/>
                    </ol>
                  </div>
                </div>
                <div className="moviepart">
                  <h2 className="moviepart-name">watch</h2>
                  <div className="moviepart-movies">
                    <ol className="movies-grid">
                      <moviecomp movies={this.state.movies} part="watch" onChangeShelf={this.updatemovie}/>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/Addmovie" onClick={this.clearResults}>Add a movie</Link>
            </div>
          </div>
          )}/>
      </div>
    )
  }
}

export default moviesApp;
