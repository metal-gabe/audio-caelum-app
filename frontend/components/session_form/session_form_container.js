import { connect } from 'react-redux'; 
import { loginAC, signupAC } from '../../actions/session_actions'; 
import SessionFormA from './session_form_A'; 

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
  }); 
}; 

const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionFormA); 
export default SessionFormContainer; 

// Need to put some logic to check the database for the entered email 
// If it's present, "process the form" using the login prop/action (Part B) 
// If it's NOT, "process the form" using the signup prop/action & component (Part C) 
