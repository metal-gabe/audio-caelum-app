import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isSongPlaying: false, };
    this.togglePlayPause = this.togglePlayPause.bind(this);
  };

  // THIS CONTROLS WHETHER THE SONG SHOULD PLAY IMMEDIATELY ONCE A PLAY BUTTON IS PRESSED
  // componentDidUpdate() {
  //   if (!this.state.isSongPlaying && this.props.loadedSong) {
  //     const player = document.getElementById('player');
  //     player.play();
  //   }
  // };

  togglePlayPause(e) {
    const x = e.which;
    const player = document.getElementById('player');
    if (this.props.loadedSong) {
      if (x === 32 && this.state.isSongPlaying) {
        player.pause();
        e.stopPropagation();
        // there might a listener for on spacebar
      } else {
        player.play();
        e.stopPropagation();
      }
      this.setState({ isSongPlaying: !this.state.isSongPlaying, });
    }
  };

  render() {
    const song = this.props.loadedSong ? this.props.loadedSong : '';
    document.addEventListener("keydown", this.togglePlayPause);

    const renderAlbumImg = song ? <img src={song.albumImgUrl} /> : null;

    const isSongLoaded = song ? {display: 'flex'} : {display: 'none'};

    return (
      <div className="audio-player-wrapper">
        <div className="player-container">
          <audio id="player" className="audio-player" src={song.songUrl} controls>
            Your browser does not support the HTML5 audio player
          </audio>
          <div className="playing-artist">
            {renderAlbumImg}
            <div className="artist-info">
              <div className="band-name">{song.artistId}</div>
              <div className="song-title">{song.songTitle}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Player;

{/* <div className="audio-player-wrapper" style={isSongLoaded} > */}
