import React, { Component } from 'react';
import PlayButton from '../player/play_button';

class SongItem extends Component {
  constructor(props) {
    super(props);
    this.playThisSong = this.playThisSong.bind(this);
  }

  playThisSong() {
    const { playSong, song } = this.props;
    playSong(song);
  }

  render() {
    const style = { playButtonSplashPage: 'play-button-splash-page' };

    const { song } = this.props;
    return (
      <div className="song-item">
        <div className="play-and-img">
          <PlayButton playThisSong={this.playThisSong} style={style} />
          <img
            alt={`${song.songTitle} by ${song.artistId}`}
            src={song.albumImgUrl}
          />
        </div>
        <div className="song-title">{song.songTitle}</div>
        <div className="artist-name">{song.artistId}</div>
      </div>
    );
  }
}

export default SongItem;
