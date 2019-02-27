import { connect } from 'react-redux'; 
import { loginAC } from '../../actions/session_actions'; 
import SessionForm from './session_form'; 

const mapStateToProps = (state) => { 
  return ({ 
    currentUser: entities.users[session.id], 
    errors: errors.session, 
    formType: 'Login', 
  }); 
}; 

const mapDispatchToProps = (dispatch) => { 
  return ({ 
    processForm: (user) => dispatch(loginAC(user)), 
  }); 
}; 

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionFrom); 
export default LoginFormContainer; 
