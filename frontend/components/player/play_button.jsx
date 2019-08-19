import React from 'react';

const PlayButton = props => {
  const { playThisSong, style } = props;

  return (
    <button className={style} onClick={playThisSong}>
      <i className="fas fa-play" />
    </button>
  );
};

export default PlayButton;
