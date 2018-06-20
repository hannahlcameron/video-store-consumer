import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Customer.css";



class Customer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    callbackgetSelectedCustomer: PropTypes.func.isRequired
  }

  onClickCustomer =(event) => {
    console.log(event.target.id);
    this.props.callbackgetSelectedCustomer(event.target)
  }
  render() {
    return (
      <li>
      {this.props.name}
        <button onClick={this.onClickCustomer} name={this.props.name} id={this.props.id}>Select Customer</button>
      </li>
    );
  }
}


export default Customer;
