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
      lastClicked: null,
      pairsFound: 0
    })

    this.handleClick = this.handleClick.bind(this);
    this.resetApp = this.resetApp.bind(this);
  }


  // function that shuffles the board and resets the state of the game
  resetApp(e = null) {

    // if the event is due to the reset button being hit rather than the game being won
    if (e) {
      e.preventDefault();
    }

    // set all the cards to a hidden state
    [...document.querySelectorAll('.board__card')].forEach(card => {
      card.classList.remove('board__card--found');
      card.classList.remove('board__card--active');
      card.classList.add('board__card--hidden');
      card.dataset.found = "false";
    });

    setTimeout(() => {
      // shuffle the board
      this.setState({
        board: shuffle(this.state.board),
        lastClicked: null,
        pairsFound: 0
      });
    }, 200);

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


  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <Board board={this.state.board} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;
