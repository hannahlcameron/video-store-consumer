import React, { Component } from 'react';

import './App.css';
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">V i d e O c t o</p>
        </header>
        <Container />
        <footer className="App-footer"> VideOcto, 2018
          <p>Hannah,Brenda,Wini</p>
        </footer>

      </div>
    );
  }
}

export default App;
