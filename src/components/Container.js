import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MovieCollection from './MovieCollection'
import CustomerCollection from './CustomerCollection'


class Container extends Component {

constructor() {
  super();
  this.state = {
    movies: []
  }
}

componentDidMount() {
// getMovies() {
  axios.get(`${URL}/movies`)
  .then((response) => {
    console.log(response.data);
const all_movies = response.data.map((movie)=>{
  return movie
});

    this.setState({
      movies: all_movies
    })
  })
  .catch((error)=> {
    console.log(error);
  })
}

getCustomers() {
  axios.get(`${URL}/customers`)
  .then((response) => {
    console.log(response.data);
    return (
      response.data
    )
  })
  .catch((error)=> {
    console.log(error);
  })
}

  render() {
    // const movies = this.getMovies();
    // const customers = this.getCustomers();
    return (
      <div>
      <p>here?</p>
        <CustomerCollection test = "this is a test" />
        <MovieCollection movies = {this.state.movies}  />


      </div>

    );
  }
}


export default Container;
