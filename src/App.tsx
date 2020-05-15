import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Center} from './1'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Center>
          Edit <code>src/App.tsx</code> and save to reload.
        </Center>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
