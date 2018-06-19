import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import CustomerCollection from './CustomerCollection'
import SearchForm from './SearchForm'
import { BrowserRouter as Router, Route, Link, Props } from "react-router-dom";
import axios from "axios";

const URL = 'http://localhost:3000/';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      selectedCustomerName:'none',
      selectedCustomerId: "none",
      selectedMovie: 'none'
    }
  }

  getSelectedMovie = (title)=> {
    this.setState({
      selectedMovie: title
    })
  }

  getSelectedCustomer = (customer) => {
    this.setState({
      selectedCustomerName: customer.name,
      selectedCustomerId: customer.id
    })
  }

  makeRental = (event) => {
    axios.post(URL+"/rentals/"+this.state.selectedMovie+"/check-out", {
      title: this.state.selectedMovie,
      customer_id: this.state.selectedCustomerId,
      due_date: Date.now() + 7
    })
    .then((response)=>{
      
    })

  }


  render() {

    return (
      <Router>
      <div>
        <h1>Selected Customer {this.state.selectedCustomerName}</h1>
        <h1>Selected Movie {this.state.selectedMovie}</h1>
        <button onClick={this.makeRental}>Check out new Rental</button>
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
