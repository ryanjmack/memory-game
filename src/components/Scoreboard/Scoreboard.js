/***********************************************************************
* File that contains the Scoreboard Class
***********************************************************************/
import React from 'react';
import './Scoreboard.css';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.formatTime = this.formatTime.bind(this);
  }


  formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    seconds %= 60;

    // pad the minutes
    if (mins < 10) {
      mins = `0${mins}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${mins}:${seconds}`;
  }


  render() {
    return (
      <div className="scoreboard">
        <p>{this.props.pairsFound}/{this.props.numPairs} Pairs Found</p>
        <p>Current time: {this.props.time ? this.formatTime(this.props.time) : '00:00'}</p>
        <p>Best time: {isFinite(this.props.bestTime) ? this.formatTime(this.props.bestTime) : 'N/A'}</p>
      </div>
    )
  }
}

export default Scoreboard;
