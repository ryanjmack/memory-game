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


  render() {
    return <h1 className='board'>{this.state.board.map(el => el.join(', ')).join(', ')}</h1>;
  }
}

export default Board;
