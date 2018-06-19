import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Customer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    callbackgetSelectedCustomer: PropTypes.func.isRequired
  }

  onClickCustomer =(event) => {
    this.props.callbackgetSelectedCustomer(event.target.name)
  }
  render() {
    return (
      <li>
      {this.props.name}
        <button onClick={this.onClickCustomer} name={this.props.name}>Select Customer</button>
      </li>
    );
  }
}


export default Customer;
