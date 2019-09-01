import React from 'react';
import SongItem from './song_item';

const SplashTrending = props => {
  const { playSong, toggleSessionModal, trendingSongs } = props;
  const tsMid = Math.floor(trendingSongs.length / 2);
  const trendGroup1 = trendingSongs.slice(0, tsMid);
  const trendGroup2 = trendingSongs.slice(tsMid);

  const renderTrendingGroup1 = trendGroup1.map(song => {
    return <SongItem key={song.id} playSong={playSong} song={song} />;
  });
  const renderTrendingGroup2 = trendGroup2.map(song => {
    return <SongItem key={song.id} playSong={playSong} song={song} />;
  });

  return (
    <section className="splash-trending">
      <h2>Hear what&lsquo;s trending for free in the AudioCaelum community</h2>
      <div className="trending-songs">
        <div className="trending-group-1">{renderTrendingGroup1}</div>
        <div className="trending-group-2">{renderTrendingGroup2}</div>
        <div className="explore-trending">
          <button className="explore-music-btn" onClick={toggleSessionModal}>
            Explore more music
          </button>
        </div>
      </div>
    </section>
  );
};

export default SplashTrending;
