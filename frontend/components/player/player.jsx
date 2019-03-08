import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  render() {
    return (
      <div className="audio-player-wrapper">
        {/*
        <ReactPlayer
          url=""
          width="100%"
          height="3em"
          controls={true}
          config={
            {}
          }
        />
        */}
        <div className="player-container">
          <audio className="audio-player" src="" controls>
            Your browser does not support the HTML5 audio player
          </audio>
          <div className="playing-artist">
            <img src="" />
            <div>
              <div>AnneX</div>
              <div>Song Name Here</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Player;
