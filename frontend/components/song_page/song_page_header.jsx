import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongPageHeader extends Component {
  constructor(props) {
    super(props);
    this.playThisSong = this.playThisSong.bind(this);
  };
  capitalize(string) {
    const newStr = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return newStr;
  };
  playThisSong() { this.props.playSong(this.props.song); };

  render() {
    return (
      <div className="song-page-header">
        <div className="song-info">
          {/* add a div here for a big orange play button here */}
          <div>
            <span className="artist-name">{this.capitalize(this.props.artist)}</span>
            <div className="song-title">{this.capitalize(this.props.songTitle)}</div>
          </div>
        {/* add a div to hold submission age & genre tags info */}
        </div>
        <div className="album-img" onClick={this.playThisSong}>
          <img src={this.props.song.albumImgUrl} />
        </div>
      </div>
    );
  };
};

export default SongPageHeader;
