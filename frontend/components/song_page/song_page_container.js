import { connect } from 'react-redux';
import { playSongAC, requestSongAC } from '../../actions/song_actions';
import selectSong from '../../reducers/selectors';
import SongPage from './song_page';

const mapStateToProps = (state, ownProps) => {
  const { entities, session, errors } = state;
  const songTitle = ownProps.match.params.songTitle;
  const artist = ownProps.match.params.username;
  return ({
    currentUser: entities.users[session.id],
    currentArtist: artist,
    songTitle,
    songFromState: selectSong(state, songTitle),
    errors: errors.songErrors,
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    requestSong: (songTitle) => dispatch(requestSongAC(songTitle)),
    playSong: (song) => dispatch(playSongAC(song)),
  });
};

const SongPageContainer =
  connect(mapStateToProps, mapDispatchToProps)(SongPage);
export default SongPageContainer;
