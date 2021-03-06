import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import CustomerCollection from './CustomerCollection'
import SearchForm from './SearchForm'
import { BrowserRouter as Router, Route, Link, Props } from "react-router-dom";
import axios from "axios";
import Status from './Status'
import "./Container.css"

const URL = 'http://localhost:3000/';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      selectedCustomerName:'none',
      selectedCustomerId: "none",
      selectedMovieTitle: 'none',
      selectedMovieId: "none",
      status: {
        message: 'Loaded page',
        type: 'success'
      }
    }
  }

  updateStatus = (message,type) => {
    this.setState({
      status: {
        message: message,
        type: type,
      }
    })
  }
  getSelectedMovie = (movie)=> {
    console.log(movie);
    this.setState({
      selectedMovieTitle: movie.name,
      selectedMovieId: movie.id
    })
  }

  getSelectedCustomer = (customer) => {
    this.setState({
      selectedCustomerName: customer.name,
      selectedCustomerId: customer.id
    })
  }

  makeRental = (event) => {


    let date = new Date();
    date.setDate(date.getDate() + 7);

    console.log(event);
    axios.post(URL+"rentals/"+this.state.selectedMovieTitle+"/check-out", {
      title: this.state.selectedMovieTitle,
      customer_id: this.state.selectedCustomerId,
      due_date: date
    })
    .then((response)=>{
      this.updateStatus(`Successfully checked out ${this.state.selectedMovieTitle} for
        ${this.state.selectedCustomerName}`, 'success')
        console.log(response);
      })
      .catch((error)=>{
        this.updateStatus(error.message,'error');
      })

    }


    render() {

      return (
        <main>

          <Router>
            <div className="container-info">
              <nav className="top-bar">
                <Status
                  message={this.state.status.message}
                  type={this.state.status.type}
                  className="status"/>

                <ul className="nav">
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
                <div className="selection">
                  <h3>Selected Customer: <span>{this.state.selectedCustomerName}</span></h3>
                  <h3>Selected Movie: <span>{this.state.selectedMovieTitle}</span></h3>
                </div>
                <button onClick={this.makeRental} className="rental-button">Check out new Rental</button>


              </nav>




              <Route exact path="/search" render={props => <SearchForm
              callbackUpdateStatus = {this.updateStatus} />}/>
              <Route exact path="/library" render={props => <MovieCollection
              callbackgetSelectedMovie = {this.getSelectedMovie}
              callbackUpdateStatus = {this.updateStatus}  />} />
              <Route path="/customers" render={props => <CustomerCollection
              callbackgetSelectedCustomer = {this.getSelectedCustomer}
              callbackUpdateStatus = {this.updateStatus} />} />

            </div>
        </Router>
      </main>

            );
          }
        }


        export default Container;
