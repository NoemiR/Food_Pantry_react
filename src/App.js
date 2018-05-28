import React, { Component } from 'react';
import Logo from './Logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className="App-title">One helping hand in time is better than one hundred that are too late</h1>
        </header>
        <p className="App-intro">
          To get started
        </p>
      </div>
    );
  }
}

export default App;
