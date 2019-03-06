import { connect } from 'react-redux';
import { requestSongAC } from '../../actions/song_actions';
import selectSong from '../../reducers/selectors';
import SongPage from './song_page';

const mapStateToProps = (state, ownProps) => {
  const { entities, session, errors } = state;
  const songTitle = ownProps.match.params.songTitle;
  // debugger
  return ({
    currentUser: entities.users[session.id],
    songTitle,
    songFromState: selectSong(state, songTitle),
    errors,
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    requestSong: (songTitle) => dispatch(requestSongAC(songTitle)),
  });
};

const SongPageContainer =
  connect(mapStateToProps, mapDispatchToProps)(SongPage);
export default SongPageContainer;
