import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie";

const URL = 'http://localhost:3000/';

class SearchForm extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired
  // }

  constructor(){
    super();
    this.state = {
      searchResult: [],
      query: ""
    }
  }

  searchForResults = (submit) =>{
    submit.preventDefault();
    axios.get(`${URL}/movies?query=${this.state.query}`)
    .then((response) => {
      console.log(response.data);

      const results = response.data;

      this.setState({
        searchResult: results
      })
    })
    .catch((error)=> {
      console.log(error);
    })}

    onInputChange = (event) => {

      this.setState({
        query: event.target.value
      })

    }

    addMovieToLibrary = (params)=> {
      axios.request({
        url: `${URL}/movies`,
        methods: 'post',
        params: params,
      })
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=> {
        console.log(error);
      })
      }
    }

    render() {

      const each_movie = this.state.searchResult.map((movie, index)=>{
        console.log(movie);
        return <Movie key={index} title={movie.title} overview={movie.overview}
        release_date={movie.release_date} image={movie.image_url}
        external_id={movie.external_id}  inLibrary={false} callbackaddMovieToLibrary={this.addMovieToLibrary}/>
      })

      return (
        <div>
          <form onSubmit={this.searchForResults} >
            <label htmlFor='query' className="new-card-form__form-label">Search for:</label>
            <textarea
            name='query'
            value= {this.state.query}
            onChange={this.onInputChange}/>
            <button type="submit" className="new-card-form__form-button">Submit</button>
            </form>
            <ul>
            {each_movie}
            </ul>
        </div>
      );
    }
  }


  export default SearchForm;
