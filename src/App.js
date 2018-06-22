import React, { Component } from 'react';

import './App.css';
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <div className="App" id="overall">
        <header className="header">
          <p className="App-title">V i d e O c t o</p>
        </header>
        <Container />
        <footer >
        <ul className="footer">
          <li>@VideOcto, 2018</li>
          <li>Hannah</li>
          <li>Brenda</li>
          <li>Wini</li>
        </ul>
        </footer>

      </div>
    );
  }
}

export default App;
