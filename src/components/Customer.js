import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';



class Customer extends Component {
  render() {
    return (
      <p>
      {this.props.name}
      </p>
    );
  }
}


export default Customer;
