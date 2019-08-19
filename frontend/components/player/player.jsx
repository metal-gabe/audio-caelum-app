import React, { Component } from 'react';
// import ReactPlayer from 'react-player';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isSongPlaying: false };
    this.togglePlayPause = this.togglePlayPause.bind(this);
  }

  // THIS CONTROLS WHETHER THE SONG SHOULD PLAY IMMEDIATELY ONCE A PLAY BUTTON IS PRESSED
  // componentDidUpdate() {
  //   const { isSongPlaying } = this.state;
  //   const { loadedSong } = this.props;

  //   if (!isSongPlaying && loadedSong) {
  //     const player = document.getElementById('player');
  //     player.play();
  //   }
  // }

  togglePlayPause(e) {
    const { isSongPlaying } = this.state;
    const x = e.which;
    const player = document.getElementById('player');
    const { loadedSong } = this.props;
    if (loadedSong) {
      if (x === 32 && isSongPlaying) {
        player.pause();
        e.stopPropagation();
        // there might a listener for on spacebar
      } else {
        player.play();
        e.stopPropagation();
      }
      this.setState({ isSongPlaying: !isSongPlaying });
    }
  }

  render() {
    const { loadedSong } = this.props;
    const song = loadedSong ? loadedSong : '';
    document.addEventListener('keydown', this.togglePlayPause);

    const renderAlbumImg = song ? (
      <img alt="Album Artwork" src={song.albumImgUrl} />
    ) : null;
    // const isSongLoaded = song ? { display: 'flex' } : { display: 'none' };

    return (
      <div className="audio-player-wrapper">
        <div className="player-container">
          <audio
            controls
            className="audio-player"
            id="player"
            src={song.songUrl}
          >
            <track default kind="captions" src="" srcLang="en" />
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
  }
}

export default Player;

/* <div className="audio-player-wrapper" style={isSongLoaded} > */
