import React, { Component } from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 
import EmailForm from './email_form'; 
import SignupForm from './signup_form'; 
import LoginForm from './login_form'; 

class SessionForm extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      username: '', 
      password: '', 
      email: '', 
    }; 
    this.update = this.update.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }; 

  update(field) { 
    return ((e) => this.setState({ 
      [field]: e.target.value, 
    })); 
  }; 

  handleSubmit(e) { 
    e.preventDefault(); 
    // The line below creates a new copy of the user object / local state 
    // But is it really needed? 
    const user = Object.assign({}, this.state); 
    this.props.action(user); 
  }; 

  render() { 
    // Testing that the input field updates correctly 
    // console.log(this.state.email); 
    const EmailFormView = <EmailForm 
      handleSubmit={this.handleSubmit} 
      email={this.state.email} 
      update={this.update} 
    />; 

    const SignupFormView = <SignupForm 
      handleSubmit={this.handleSubmit} 
      email={this.state.email} 
      update={this.update} 
    />; 

    const LoginFormView = <LoginForm 
      handleSubmit={this.handleSubmit} 
      email={this.state.email} 
      update={this.update} 
    />; 

    // Add a ternary here to render the appropriate FormView 
    // based on whether or not the entered email exists 
    let currentFormComponent = EmailFormView; 

    return ( 
      <section className="modal"> 
        <section className="modal-screen"> 
          <div className="close-button">&times;</div> 
          {currentFormComponent} 
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
