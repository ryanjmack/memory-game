import React from 'react';
import './App.css';
import Board from '../Board/Board';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <Board />
      </div>
    )
  }
}

export default App;
