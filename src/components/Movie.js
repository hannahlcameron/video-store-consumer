import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }


  render() {
    return (
      <li>
      {this.props.title}
      </li>
    );
  }
}


export default Movie;
