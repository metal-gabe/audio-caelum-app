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

const mapDispatchToProps = (dispatch) => { 
  return ({ 
    login: (user) => dispatch(loginAC(user)), 
    signup: (user) => dispatch(signupAC(user)), 
    checkEmail: (email) => verifyEmailAPI(email), // maybe wrap this call in "Boolean" to do the check  
  }); 
}; 

const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm); 
export default SessionFormContainer; 

// Need to put some logic to check the database for the entered email 
// If it's present, "process the form" using the login prop/action (Part B) 
// If it's NOT, "process the form" using the signup prop/action & component (Part C) 
