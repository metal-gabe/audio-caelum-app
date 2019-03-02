import { connect } from 'react-redux'; 
import { logoutAC } from '../../actions/session_actions'; 
import Navbar from './navbar'; 

const mapStateToProps = ({ entities, session }) => { 
  const userId = session.id; 
  return ({ 
    currentUser: entities.users[userId], 
  }); 
}; 

const mapDispatchToProps = (dispatch) => { 
  return ({ 
    logout: () => dispatch(logoutAC()), 
  }); 
}; 

const NavbarContainer = 
  connect(mapStateToProps, mapDispatchToProps)(Navbar); 

export default NavbarContainer; 
