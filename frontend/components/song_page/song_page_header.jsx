import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayButton from '../player/play_button';

class SongPageHeader extends Component {
  constructor(props) {
    super(props);
    this._playThisSong = this.playThisSong.bind(this);
  };
  capitalize(string) {
    const newStr = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return newStr;
  };
  playThisSong() { this.props.playSong(this.props.song); };

  render() {
    const playButtonSongPageStyle = 'play-button-song-page';

    return (
      <div className="song-page-header">
        <div className="song-info">
          <PlayButton
            style={playButtonSongPageStyle}
            playThisSong={this._playThisSong}
          />
          <div>
            <span className="artist-name">{this.capitalize(this.props.artist)}</span>
            <div className="song-title">{this.capitalize(this.props.songTitle)}</div>
          </div>
          {/* add a div to hold submission age & genre tags info */}
        </div>
        <div className="album-img">
          <img src={this.props.song.albumImgUrl} />
        </div>
      </div>
    );
  };
};

export default SongPageHeader;
