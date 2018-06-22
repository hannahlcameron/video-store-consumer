import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Customer from "./Customer"

const URL = 'http://localhost:3000/';


class CustomerCollection extends Component {
  static propTypes = {
    callbackgetSelectedCustomer:PropTypes.func.isRequired,
    callbackUpdateStatus:PropTypes.func.isRequired,
  }

  constructor(){
    super();
    this.state= {
      customers: [],
    }
  }

  componentDidMount(){
    this.props.callbackUpdateStatus('Loading customers','success')
    axios.get(`${URL}/customers`)
    .then((response) => {
      console.log(response.data);
      this.props.callbackUpdateStatus(`Successfully loaded ${response.data.length} customers`, 'success')

      const all_customers = response.data;

      this.setState({
        customers: all_customers
      })
    })
    .catch((error)=> {
      this.props.callbackUpdateStatus(error.message,'error');
    })
  }

  selectedCustomerbridge = (customer) => {
    this.props.callbackgetSelectedCustomer(customer);
  }

  render() {

    const each_customer = this.state.customers.map((customer, index)=>{
      return <Customer key={index} name={customer.name} id={customer.id}
      callbackgetSelectedCustomer={this.selectedCustomerbridge}/>
    })

    return (
      <div className="customer-collection container-child">
        <h1> Customers </h1>
        <ul className="customers">
          <li>{each_customer}</li>
        </ul>
      </div>
    );
  }
}

export default CustomerCollection;
