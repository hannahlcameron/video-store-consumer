import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Customer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <li>
      {this.props.name}
      </li>
    );
  }
}


export default Customer;
