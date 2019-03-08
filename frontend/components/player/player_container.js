import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = ({ entities, ui }) => {
  return ({
    loadedSong: entities.songs[ui.playingSong],
    // playingArtist: ,
  });
};

const PlayerContainer = connect(mapStateToProps)(Player);
export default PlayerContainer;
