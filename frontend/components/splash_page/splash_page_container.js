import { connect } from 'react-redux';
import { loginAC } from '../../actions/session_actions';
import SplashPage from './splash_page';

const mapStateToProps = ({ entities, session, errors }) => {
  return ({
    loggedIn: Boolean(session.id),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (user) => dispatch(loginAC(user)),
  });
};

const SplashPageContainer =
  connect(mapStateToProps, mapDispatchToProps)(SplashPage);

export default SplashPageContainer;
