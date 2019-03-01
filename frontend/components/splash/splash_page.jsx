import React, { Component } from 'react'; 
import { Link, Redirect, Route } from 'react-router-dom'; 
import { loginAC } from '../../actions/session_actions'; 
import SessionFormContainer from '../session_form/session_form_container'; 

class SplashPage extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      sessionModalIsOpen: false, 
    }; 
    this.toggleSessionModal = this.toggleSessionModal.bind(this); 
    this.demoLogin = this.demoLogin.bind(this); 
  }; 

  toggleSessionModal() { 
    this.setState({ sessionModalIsOpen: !this.state.sessionModalIsOpen, }); 
  }; 

  demoLogin() { 
    // debugger; 
    const demoUser = { username: 'bueller', email: 'b@b.com', password: 'password' }; 
    loginAC(demoUser) 
  }; 

  render() { 
    const renderSessionForm = this.state.sessionModalIsOpen ? 
      <SessionFormContainer toggleSessionModal={this.toggleSessionModal} /> : null 

    return ( 
      <div> 
        <header> 
          <h1>AudioCaelum</h1> 
          <div><Link to="" onClick={this.toggleSessionModal}>Sign In</Link></div> 
          <div><Link to="" onClick={this.toggleSessionModal}>Create Account</Link></div> 
          <div><Link to="" onClick={this.demoLogin}>Demo Login</Link></div> 
        </header> 
        {renderSessionForm} 
      </div> 
    ); 
  }; 
}; 

export default SplashPage; 
