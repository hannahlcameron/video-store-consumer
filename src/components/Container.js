import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCollection from './MovieCollection'
import CustomerCollection from './CustomerCollection'


class Container extends Component {



  render() {

    return (
      <div>
      <p>here?</p>
        <CustomerCollection />
        <MovieCollection  />
      </div>

    );
  }
}


export default Container;
