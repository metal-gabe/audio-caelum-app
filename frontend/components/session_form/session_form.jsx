import React, { Component } from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 
import EmailForm from './email_form'; 
import LoginForm from './login_form'; 
import SignupForm from './signup_form'; 

class SessionForm extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      username: 'bueller', 
      password: '', 
      email: '', 
      currentFormComponent: '', 
    }; 
    this.update = this.update.bind(this); 
    this.updateFormComponent = this.updateFormComponent.bind(this); 
    this.handleSignup = this.handleSignup.bind(this); 
    this.handleLogin = this.handleLogin.bind(this); 
    this.checkEmail = this.checkEmail.bind(this); 
  }; 

  update(field) { 
    return ((e) => this.setState({ 
      [field]: e.target.value, 
    })); 
  }; 

  checkEmail(email) { 
    return ((e) => { 
      e.preventDefault(); 

      let checkEmailAnswer = 
        this.props.checkEmail(email) ? 'LoginFormView' : 'SignupFormView'; 

      this.setState({ currentFormComponent: checkEmailAnswer }); 
    }); 
  }; 

  updateFormComponent(comp) { 
    this.setState({ currentFormComponent: comp }); 
  }; 

  handleLogin(e) { 
    e.preventDefault(); 
    const user = Object.assign({}, this.state); 
    this.props.login(user); 
  }; 

  handleSignup(e) { 
    e.preventDefault(); 
    const user = Object.assign({}, this.state); 
    this.props.signup(user); 
  }; 

  render() { 
    // Testing that the input field updates correctly 
    console.log(this.state); 
    const EmailFormView = <EmailForm 
      checkEmail={this.checkEmail} 
      email={this.state.email} 
      update={this.update} 
    />; 

    const LoginFormView = <LoginForm 
      handleLogin={this.handleLogin} 
      email={this.state.email} 
      updateFormComponent={this.updateFormComponent} 
      update={this.update} 
    />; 

    const SignupFormView = <SignupForm 
      handleSignup={this.handleSignup} 
      email={this.state.email} 
      updateFormComponent={this.updateFormComponent} 
      update={this.update} 
    />; 

    let renderFormComponent = SignupFormView; 
    // switch (this.state.currentFormComponent) { 
    //   case 'LoginFormView': 
    //     renderFormComponent = LoginFormView; 
    //   case 'SignupFormView': 
    //     renderFormComponent = SignupFormView; 
    //   default: 
    //     renderFormComponent = EmailFormView; 
    // } 

    return ( 
      <section className="modal"> 
        <section className="modal-screen"> 
          <div className="close-button">&times;</div> 
          {renderFormComponent} 
        </section> 
      </section> 
    ); 
  }; 
}; 

export default SessionForm; 

// NOTE: I need to create a Part A && a Part B of this session form 
  // Part A verifies the user's email 
  // Part B verifies the user's password 

// Because of this note, update the status errors on the back end to include/separate 
  // notifications for each field 

// If the user's email doesn't exist, Part A has dual functionality, it will move to Part C 
  // Part C goes into account creation mode and will create a new user 

// The only time there's an error from Part A is when the field first gets focus, something is typed 
  // then the field is emptied/empty and the user navigates away from that field 

// Ignore the Goog/Fb options and the "Privacy Policy" && "Need help?" links 

// The text below the submit button is a good place for an easter egg 


// Create a custom backend route and ajax call to verify the user's email 
// based on the success/failure, render the appropriate component 
