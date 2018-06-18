import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie'
import Customer from './Customer'


class Container extends Component {
  render() {
    return (
      <div>
      <Customer />
      <Movie />
      </div>

    );
  }
}


export default Container;
