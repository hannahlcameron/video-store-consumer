import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"



class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    image: PropTypes.string,
    externalId: PropTypes.number,
    callbackgetSelectedMovie: PropTypes.func,
    inLibrary: PropTypes.bool.isRequired,
    callbackaddMovieToLibrary: PropTypes.func
  }

  onClickMovie=(event)=> {
    this.props.callbackgetSelectedMovie(event.target);
  }

  onAddMovie =(event) => {
    event.preventDefault();
    this.props.callbackaddMovieToLibrary({
      title: this.props.title,
      overview: this.props.overview,
      release_date: this.props.release_date,
      image_url: this.props.image,
      inventory: 5,
      external_id: this.props.externalId
    });

  }
  render() {

let button = "";
if (this.props.inLibrary) {
  button = <button onClick={this.onClickMovie} name={this.props.title} id={this.props.id}>Select Movie</button>
}
else {
  button = <button onClick={this.onAddMovie} name={this.props.title}>Add to library</button>
}

    return (
      <li className="movie-container">
      {this.props.title}
      <img src={this.props.image} alt={`cover art for ${this.props.title}`}/>
      {this.props.release_date}
      {this.props.overview}
      {button}
      </li>
    );
  }
}


export default Movie;
