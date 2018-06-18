import React, { Component } from 'react';
import PropTypes from 'prop-types';




class MovieCollection extends Component {
  // static propTypes = {
  //   movies:PropTypes.array.isRequired,
  // }
  render() {
    console.log(this.props);

    return (
      <p> {this.props.movies}
      </p>
    );
  }
}


export default MovieCollection;
