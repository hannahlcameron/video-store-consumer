import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie";
import "./MovieCollection.css"

const URL = 'http://localhost:3000/';


class MovieCollection extends Component {
  static propTypes = {
    callbackgetSelectedMovie:PropTypes.func.isRequired,
    callbackUpdateStatus: PropTypes.func.isRequired
  }

  constructor(){
    super();
    this.state= {
      movies: [],
    }
  }

  componentDidMount(){
    this.props.callbackUpdateStatus('Loading movies','success')
    axios.get(`${URL}/movies`)
    .then((response) => {
      console.log(response.data);
      this.props.callbackUpdateStatus(`Successfully loaded ${response.data.length} movies`, 'success')

      const all_movies = response.data;

      this.setState({
        movies: all_movies
      })
    })
    .catch((error)=> {
      this.props.callbackUpdateStatus(error.message,'error');
    })
  }

  selectedMoviebridge = (movie) => {
    this.props.callbackgetSelectedMovie(movie);
  }


  render() {
    const each_movie = this.state.movies.map((movie, index)=>{
      return <Movie key={index} title={movie.title} id={movie.id}
      release_date={movie.release_date} overview={movie.overview} image = {movie.image_url}
      callbackgetSelectedMovie={this.selectedMoviebridge} inLibrary={true}/>
    })

    return (
      <div>

      <h1> MOVIES </h1>
      <ul className="movies">
      {each_movie}
      </ul>
      </div>
    );
  }
}


export default MovieCollection;
