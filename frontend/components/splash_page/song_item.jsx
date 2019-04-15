import React, { Component } from 'react';

class SongItem extends Component {
  render() {
    const { song } = this.props;
    return (
      <div className="song-item">
        <img src={song.albumImgUrl} alt={song.songTitle} />
        <div className="song-title">{song.songTitle}</div>
        <div className="artist-name">{song.artistId}</div>
      </div>
    );
  };
};

export default SongItem;
