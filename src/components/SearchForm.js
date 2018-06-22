import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie";
import "./SearchForm.css";

const URL = 'http://localhost:3000/';

class SearchForm extends Component {
  static propTypes = {
    callbackUpdateStatus: PropTypes.func.isRequired
  }

  constructor(){
    super();
    this.state = {
      searchResult: [],
      query: ""
    }
  }

  searchForResults = (submit) =>{
    submit.preventDefault();
    this.props.callbackUpdateStatus(`Searching for movies that match: ${this.state.query} `,'success')
    axios.get(`${URL}/movies?query=${this.state.query}`)
    .then((response) => {
      console.log(response.data);
      this.props.callbackUpdateStatus(`Successfully loaded ${response.data.length} movies`, 'success')
      const results = response.data;

      this.setState({
        searchResult: results
      })
    })
    .catch((error)=> {
      this.props.callbackUpdateStatus(error.message,'error');
    })}

    onInputChange = (event) => {

      this.setState({
        query: event.target.value
      })

    }

    addMovieToLibrary = (params)=> {
      this.props.callbackUpdateStatus(`Adding movie ${params.title} to library `,'success')
      console.log("params to be sentin search form:");
      console.log(params);
      axios.post(`${URL}movies`, params)
      .then((response)=>{
        console.log(response);
        this.props.callbackUpdateStatus(`Successfully added ${params.title} to library`, 'success')
      })
      .catch((error)=> {
        this.props.callbackUpdateStatus(error.message,'error');
      })
      }


    render() {

      const each_movie = this.state.searchResult.map((movie, index)=>{
        console.log(movie);
        return <Movie key={index} title={movie.title} overview={movie.overview}
        release_date={movie.release_date} image={movie.image_url}
        externalId={movie.external_id}  inLibrary={false} callbackaddMovieToLibrary={this.addMovieToLibrary}/>
      })

      return (
        <div className="container-child">
          <form onSubmit={this.searchForResults} >
            <div className="search-bar">
              <textarea className="search-box"
              name='query'
              value= {this.state.query}
              placeholder ="Search for a movie.."
              onChange={this.onInputChange}/>
              <button className="search" type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
            <ul className="movies">
            {each_movie}
            </ul>
        </div>
      );
    }
  }


  export default SearchForm;
