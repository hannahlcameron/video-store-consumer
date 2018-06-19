import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import CustomerCollection from './CustomerCollection'
import SearchForm from './SearchForm'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Container extends Component {


  render() {

    return (
      <Router>
      <div>
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
        <Route exact path="/library" component={MovieCollection} />
        <Route path="/customers" component={CustomerCollection} />

      </div>
    </Router>
    );
  }
}


export default Container;
