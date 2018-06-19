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


    render() {

      const each_movie = this.state.searchResult.map((movie, index)=>{
        console.log(movie.title);
        return <Movie key={index} title={movie.title} inLibrary={false}/>
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
