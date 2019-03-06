import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  render() {
    return (
      <div className="audio-player">
        <ReactPlayer
          url=""
          width="100%"
          height="3em"
          controls={true}
          config={
            {}
          }
        />
      </div>
    );
  };
};

export default Player;
