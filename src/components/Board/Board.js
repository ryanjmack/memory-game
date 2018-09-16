/***********************************************************************
* File that contains the Board Class
***********************************************************************/
import React from 'react';
import './Board.css';
import shuffle from './utils/shuffle';


class Board extends React.Component {
  constructor(props) {
    super(props);

    // board is by default 6x6 grid
    // Numbers will be the differentiators for the game
    this.state = {
      board:
        shuffle([
          [1, 1, 2, 2, 3, 3],
          [4, 4, 5, 5, 6, 6],
          [7, 7, 8, 8, 9, 9],
          [10, 10, 11, 11, 12, 12],
          [13, 13, 14, 14, 15, 15],
          [16, 16, 17, 17, 18, 18]
        ])
    }
  }


  // iterates over the board and creates cards in the DOM
  createCards() {

    // the board is 2D so we iterate over each row
    return this.state.board.slice().map((row, i) => {
      return (
        // in regards to the arbitrary key values -  // https://stackoverflow.com/a/43892905/6894170
        <div key={i + 100} className='board__row'>
          {row.map((num, j) => <div key={i + j} className='board__card board__card--hidden' onClick={this.handleClick}>{num}</div>)}
        </div>
      )
    });
  }

  render() {
    return (
      <div className="board">
        {this.createCards()}
      </div>
    );
  }
}

export default Board;
