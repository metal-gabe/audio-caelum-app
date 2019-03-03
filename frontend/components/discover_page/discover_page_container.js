import { connect } from 'react-redux';
import { logoutAC } from '../../actions/session_actions';
import DiscoverPage from './discover_page';

const mapStateToProps = ({ entities, session, errors }) => {
  return ({
    currentUser: entities.users[session.id],
    loggedIn: Boolean(session.id),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

const DiscoverPageContainer =
  connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
export default DiscoverPageContainer;
