import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Customer from "./Customer"

const URL = 'http://localhost:3000/';


class CustomerCollection extends Component {
  static propTypes = {
    callbackgetSelectedCustomer:PropTypes.func.isRequired,
  }

  constructor(){
    super();
    this.state= {
      customers: [],
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

  selectedCustomerbridge = (customer) => {
    this.props.callbackgetSelectedCustomer(customer);
  }

  render() {

    const each_customer = this.state.customers.map((customer, index)=>{
      return <Customer key={index} name={customer.name} id={customer.id} callbackgetSelectedCustomer={this.selectedCustomerbridge}/>
    })

    return (
      <div>

      <h1> CUSTOMERS </h1>
      <ul>
      {each_customer}
      </ul>
      </div>
    );
  }
}

export default CustomerCollection;
