import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = (state) => {
  return ({
    // playingArtist: ,
    // playingSong: ,
  });
};

const PlayerContainer = connect(mapStateToProps)(Player);
export default PlayerContainer;
