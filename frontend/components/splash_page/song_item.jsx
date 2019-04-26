import React, { Component } from 'react';
import PlayButton from '../player/play_button';

class SongItem extends Component {
  constructor(props) {
    super(props);
    this._playThisSong = this.playThisSong.bind(this);
  };

  playThisSong() { this.props.playSong(this.props.song); };

  render() {
    const playButtonSplashPageStyle = 'play-button-splash-page';

    const { song } = this.props;
    return (
      <div className="song-item">
        <div className="play-and-img">
          <PlayButton
            style={playButtonSplashPageStyle}
            playThisSong={this._playThisSong}
          />
          <img
            src={song.albumImgUrl}
            alt={`${song.songTitle} by ${song.artistId}`}
          />
        </div>
        <div className="song-title">{song.songTitle}</div>
        <div className="artist-name">{song.artistId}</div>
      </div>
    );
  };
};

export default SongItem;
