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
        ]),
      lastClicked: null
    }

    this.createCards = this.createCards.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  /***********************************************************************
  * Handles click event on any of the cards in the Game
  *
  * If the card is the first card clicked, keep it active
  * Otherwise we need to compare it to previously clicked element
  * -- If it matches, make them visible with a class of found
  * -- Otherwise revert the state of each card back to hidden
  ***********************************************************************/
  handleClick(e) {
    const currClick = e.target;

    // error checks
    if (this.state.lastClicked === currClick || e.target.dataset.found === "true") {
      return;
    }

    // update the current card to an active state
    currClick.classList.remove('board__card--hidden');
    currClick.classList.add('board__card--active');

    // give a little feedback delay
    setTimeout(() => {

      // this is a comparison click
      if (this.state.lastClicked) {
        const prevClick = this.state.lastClicked;

        // the user made a match! set cards to a 'found' state
        if (prevClick.textContent === currClick.textContent) {
          currClick.classList.remove('board__card--active');
          currClick.classList.add('board__card--found');

          prevClick.classList.remove('board__card--active');
          prevClick.classList.add('board__card--found');

          // used in the error check at the top of this method
          prevClick.dataset.found = "true";
          currClick.dataset.found = "true";
        }

        // wrong guess! revert the cards back to 'hidden' state
        else {
          currClick.classList.remove('board__card--active');
          currClick.classList.add('board__card--hidden');

          prevClick.classList.remove('board__card--active');
          prevClick.classList.add('board__card--hidden');
        }

        // next click will be the first click
        this.setState({
          lastClicked: null
        });
      }

      // not a comparison click, save click reference for next comparison click
      else {
        this.setState({
          lastClicked: currClick
        });
      }
    }, 200);
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
