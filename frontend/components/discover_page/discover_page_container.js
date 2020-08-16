/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React

// Packages
import { connect } from 'react-redux';

// Context

// Components
import DiscoverPage from './discover_page';

// Assets
// Constants

// Utils / Methods
import { requestAllUsersAC } from '../../actions/user_actions';
import { requestAllSongsAC } from '../../actions/song_actions';

// Styles

/* -------------------------------------------------------------------------- */
/* START OF REDUX CONTAINER FOR DISCOVER PAGE */
/* -------------------------------------------------------------------------- */
const mapStateToProps = ({ entities, session, errors }) => {
	return {
		currentUser: entities.users[session.id],
		loggedIn: Boolean(session.id),
		allUsers: entities.users,
		allSongs: Object.values(entities.songs),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		requestAllUsers: () => dispatch(requestAllUsersAC()),
		requestAllSongs: () => dispatch(requestAllSongsAC()),
	};
};

const DiscoverPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(DiscoverPage);

export default DiscoverPageContainer;
