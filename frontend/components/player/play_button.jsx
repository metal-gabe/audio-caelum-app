import React, { Component } from 'react';

class PlayButton extends Component {
  render() {
    return (
      <div className={this.props.style} onClick={this.props.playThisSong}>
        <i className="fas fa-play"></i>
      </div>
    );
  };
};

export default PlayButton;
