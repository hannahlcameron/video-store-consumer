import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class Movie extends Component {


  render() {
    return (
      <p>
      {this.props.title}
      </p>
    );
  }
}


export default Movie;
