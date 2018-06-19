import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie"

const URL = 'http://localhost:3000/';


class MovieCollection extends Component {
  static propTypes = {
    callbackgetSelectedMovie:PropTypes.func.isRequired,
  }

  constructor(){
    super();
    this.state= {
      movies: [],
    }
  }

  componentDidMount(){

    axios.get(`${URL}/movies`)
    .then((response) => {
      console.log(response.data);

      const all_movies = response.data;

      this.setState({
        movies: all_movies
      })
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  selectedMoviebridge = (title) => {
    this.props.callbackgetSelectedMovie(title);
  }


  render() {
    const each_movie = this.state.movies.map((movie, index)=>{
      return <Movie key={index} title={movie.title} callbackgetSelectedMovie={this.selectedMoviebridge} inLibrary={true}/>
    })

    return (
      <div>

      <h1> MOVIES </h1>
      <ul>
      {each_movie}
      </ul>
      </div>
    );
  }
}


export default MovieCollection;
