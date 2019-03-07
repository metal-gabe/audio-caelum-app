import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongPageHeader extends Component {
  capitalize(string) {
    const newStr = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return newStr;
  };

  render() {
    return (
      <div className="song-page-header">
        <div className="song-info">
          {/* add a div here for a big orange play button here */}
          <div>
            <div className="artist-name">{this.capitalize(this.props.artist)}</div>
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
