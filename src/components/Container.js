import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import CustomerCollection from './CustomerCollection'
import SearchForm from './SearchForm'
import { BrowserRouter as Router, Route, Link, Props } from "react-router-dom";



class Container extends Component {
  constructor() {
    super();
    this.state = {
      selectedCustomer:'none',
      selectedMovie: 'none'
    }
  }

  getSelectedMovie = (title)=> {
    this.setState({
      selectedMovie: title
    })
  }

  getSelectedCustomer = (name) => {
    this.setState({
      selectedCustomer: name
    })
  }
  render() {

    return (
      <Router>
      <div>
        <h1>Selected Customer {this.state.selectedCustomer}</h1>
        <h1>Selected Movie {this.state.selectedMovie}</h1>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>

        </ul>

        <hr />


        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/library" render={props => <MovieCollection
          callbackgetSelectedMovie = {this.getSelectedMovie} />} />
        <Route path="/customers" render={props => <CustomerCollection
          callbackgetSelectedCustomer = {this.getSelectedCustomer} />} />

      </div>
    </Router>
    );
  }
}


export default Container;
