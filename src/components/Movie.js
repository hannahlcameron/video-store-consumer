import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    callbackgetSelectedMovie: PropTypes.func.isRequired
  }

  onClickMovie=(event)=> {
    this.props.callbackgetSelectedMovie(event.target.name);
  }

  render() {
    return (
      <li >
      {this.props.title}
      <button onClick={this.onClickMovie} name={this.props.title}>Select Movie</button>
      </li>
    );
  }
}


export default Movie;
