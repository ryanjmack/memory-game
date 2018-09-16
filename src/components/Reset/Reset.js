import React from 'react';
import './Reset.css';


class Reset extends React.Component {
  render() {
    return (
      <button className='Reset__button' onClick={this.props.resetApp}>Reset Board</button>
    )
  }
}

export default Reset;
