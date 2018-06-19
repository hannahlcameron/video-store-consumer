import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Customer from "./Customer"

const URL = 'http://localhost:3000/';


class CustomerCollection extends Component {
  // static propTypes = {
  //   customers:PropTypes.array.isRequired,
  // }

  constructor(){
    super();
    this.state= {
      customers: [],
      selectedCustomer: 'none'
    }
  }

  componentDidMount(){

    axios.get(`${URL}/customers`)
    .then((response) => {
      console.log(response.data);

      const all_customers = response.data;

      this.setState({
        customers: all_customers
      })
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  getSelectedCustomer = (name) => {
    this.setState({
      selectedCustomer: name
    })
  }
  render() {
    const each_customer = this.state.customers.map((customer, index)=>{
      console.log(customer.name);
      return <Customer key={index} name={customer.name} callbackgetSelectedCustomer={this.getSelectedCustomer}/>
    })

    return (
      <div>
      <h1>Selected Customer {this.state.selectedCustomer}</h1>
      <h1> CUSTOMERS </h1>
      <ul>
      {each_customer}
      </ul>
      </div>
    );
  }
}

export default CustomerCollection;
