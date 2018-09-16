import React from 'react';
import './App.css';
import Board from '../Board/Board';
import shuffle from './utilities/shuffle';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      board: shuffle([
        [1, 1, 2, 2, 3, 3],
        [4, 4, 5, 5, 6, 6],
        [7, 7, 8, 8, 9, 9],
        [10, 10, 11, 11, 12, 12],
        [13, 13, 14, 14, 15, 15],
        [16, 16, 17, 17, 18, 18]
      ]),
      pairsFound: 0
    })

    this.resetApp = this.resetApp.bind(this);
  }

  // function that shuffles the board and resets the state of the game
  resetApp(e) {

  }


  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <Board board={this.state.board} />
      </div>
    )
  }
}

export default App;
