/***********************************************************************
* File that contains the Board Class
***********************************************************************/
import React from 'react';
import './Board.css';


class Board extends React.Component {
  constructor(props) {
    super(props);

    // board is by default 6x6 grid
    // Numbers will be the differentiators for the game
    this.state = {
      board: this.props.board,
    }

    this.createCards = this.createCards.bind(this);
  }


  /***********************************************************************
  * iterates over the board and creates cards in the DOM
  ***********************************************************************/
  createCards() {

    // the board is 2D so we iterate over each row
    return this.state.board.slice().map((row, i) => {
      return (
        // in regards to the arbitrary key values -  // https://stackoverflow.com/a/43892905/6894170
        <div key={i + 100} className='board__row'>
          {row.map((num, j) => <div key={i + j} className='board__card board__card--hidden' onClick={this.props.handleClick}>{num}</div>)}
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
