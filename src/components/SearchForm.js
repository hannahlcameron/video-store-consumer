import React, { Component } from 'react';
import PropTypes from 'prop-types';



class SearchForm extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired
  // }
  render() {
    return (
      <form  >
            <label htmlFor='query' className="new-card-form__form-label">Search for:</label>
            <textarea name='query'/>
            <button type="submit" className="new-card-form__form-button">Submit</button>
          </form>
    );
  }
}


export default SearchForm;
