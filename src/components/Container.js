import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie'
import Customer from './Customer'

URL = 'http://localhost:3000/';
class Container extends Component {

getMovies() {
  axios.get(`${URL}/movies`)
  .then((response) => {
    console.log(response);
  })
  .catch((error)=> {
    console.log(error);
  })
}

getCustomers() {
  axios.get(`${URL}/customers`)
  .then((response) => {
    console.log(response);
  })
  .catch((error)=> {
    console.log(error);
  })
}

  render() {
    const movies = this.getMovies();
    const customers = this.getCustomers();
    return (
      <div>
      <Customer />
      <Movie />
      {movies}
      {customers}
      </div>

    );
  }
}


export default Container;
