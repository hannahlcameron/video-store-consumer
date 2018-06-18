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
      customers: []
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
  render() {
    const each_customer = this.state.customers.map((customer, index)=>{
      console.log(customer.name);
      return <Customer key={index} name={customer.name}/>
    })

    return (
      <div>
      {each_customer}
      </div>
    );
  }
}

export default CustomerCollection;
