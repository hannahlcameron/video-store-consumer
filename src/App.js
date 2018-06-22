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
        <footer className="footer">
        @VideOcto
        </footer>
      </div>
    );
  }
}

export default App;
