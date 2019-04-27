import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SongItem from './song_item';

class SplashTrending extends Component {
  shouldComponentUpdate() {};

  render() {
    const { trendingSongs } = this.props;
    const tsMid = Math.floor(trendingSongs.length / 2);
    const trendGroup1 = trendingSongs.slice(0, tsMid);
    const trendGroup2 = trendingSongs.slice(tsMid);

    const renderTrendingGroup1 = trendGroup1.map((song) => {
      return (
        <SongItem key={song.id} song={song} playSong={this.props.playSong} />
      );
    });
    const renderTrendingGroup2 = trendGroup2.map((song) => {
      return (
        <SongItem key={song.id} song={song} playSong={this.props.playSong} />
      );
    });

    return (
      <section className="splash-trending">
        <h2>Hear what's trending for free in the AudioCaelum community</h2>
        <div className="trending-songs">
          <div className="trending-group-1">
            {renderTrendingGroup1}
          </div>
          <div className="trending-group-2">
            {renderTrendingGroup2}
          </div>
          <div className="explore-trending">
            <Link
              to=''
              className="explore-music-btn"
              onClick={this.props.toggleSessionModal}
            >
              Explore more music
            </Link>
          </div>
        </div>
      </section>
    );
  };
};

export default SplashTrending;
