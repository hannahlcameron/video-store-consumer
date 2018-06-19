import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    callbackgetSelectedMovie: PropTypes.func,
    inLibrary: PropTypes.bool.isRequired
  }

  onClickMovie=(event)=> {
    this.props.callbackgetSelectedMovie(event.target.name);
  }

  render() {

let button = "";
if (this.props.inLibrary) {
  button = <button onClick={this.onClickMovie} name={this.props.title}>Select Movie</button>
}
else {
  button = <button onClick={this.onClickMovie} name={this.props.title}>Add to library</button>
}

    return (
      <li >
      {this.props.title}
      {button}
      </li>
    );
  }
}


export default Movie;
