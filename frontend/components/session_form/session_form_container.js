import { connect } from 'react-redux'; 
import { loginAC, signupAC } from '../../actions/session_actions'; 
import { verifyEmailAPI } from '../../util/session_api_util'; 
import SessionForm from './session_form'; 

const mapStateToProps = ({ entities, session, errors }) => { 
  return ({ 
    currentUser: entities.users[session.id], 
    errors: errors.session, 
    formType: 'Signup', 
  }); 
}; 

const mapDispatchToProps = (dispatch, ownProps) => { 
  const toggleModal = ownProps.toggleModal; 
  return ({ 
    login: (user) => dispatch(loginAC(user)), 
    signup: (user) => dispatch(signupAC(user)), 
    checkEmail: (email) => verifyEmailAPI(email), // maybe wrap this call in "Boolean" to do the check  
    toggleModal, 
  }); 
}; 

const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm); 
export default SessionFormContainer; 
