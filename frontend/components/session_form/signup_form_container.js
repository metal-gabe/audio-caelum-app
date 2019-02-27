import { connect } from 'react-redux'; 
import { signupAC } from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mapStateToProps = (state) => { 
  return ({ 
    currentUser: entities.users[session.id], 
    errors: errors.session, 
    formType: 'Signup', 
  }); 
}; 

const mapDispatchToProps = (dispatch) => { 
  return ({ 
    processForm: (user) => dispatch(signupAC(user)), 
  }); 
}; 

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionFrom); 
export default SignupFormContainer; 
