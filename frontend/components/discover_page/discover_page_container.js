import { connect } from 'react-redux';
import { logoutAC } from '../../actions/session_actions';
import { requestAllUsersAC } from '../../actions/user_actions';
import { requestAllSongsAC } from '../../actions/song_actions';
import DiscoverPage from './discover_page';

const mapStateToProps = ({ entities, session, errors }) => {
  return ({
    currentUser: entities.users[session.id],
    loggedIn: Boolean(session.id),
    allUsers: entities.users,
    allSongs: Object.values(entities.songs),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    requestAllUsers: () => dispatch(requestAllUsersAC()),
    requestAllSongs: () => dispatch(requestAllSongsAC()),
  });
};

const DiscoverPageContainer =
  connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
export default DiscoverPageContainer;
