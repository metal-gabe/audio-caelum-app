import React, { Component } from 'react'; 
import { Link, Redirect } from 'react-router-dom'; 
import EmailForm from './email_form'; 
import LoginForm from './login_form'; 
import SignupForm from './signup_form'; 

class SessionForm extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      password: "", 
      email: "", 
      currentFormComponent: "", 
      loggedIn: false, 
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

      this.props.checkEmail(email).then(() => { 
        this.setState({ currentFormComponent: "LoginFormView" }); 
      },
        () => {
          this.setState({ currentFormComponent: "SignupFormView" }); 
        } 
      ); 
    }); 
  }; 

  updateFormComponent(comp) { 
    this.setState({ currentFormComponent: comp }); 
  }; 

  handleLogin(e) { 
    e.preventDefault(); 
    const user = Object.assign({}, this.state); 
    this.props.login(user); 
    this.setState({ loggedIn: true }); 
    // this.resetState(); 
  }; 

  handleSignup(e) { 
    console.log('bueller'); 
    e.preventDefault(); 
    const user = Object.assign({}, this.state); 
    this.props.signup(user); 
    this.setState({ loggedIn: true }); 
    // this.resetState(); 
  }; 

  resetState() { 
    this.setState({ 
      password: "", 
      email: "", 
      currentFormComponent: "", 
      loggedIn: false, 
    }); 
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

    const executeRedirect = this.state.loggedIn ? 
      <Redirect exact to="/discover" /> : null 

    let renderFormComponent; 
    switch (this.state.currentFormComponent) { 
      case "LoginFormView": 
        renderFormComponent = LoginFormView; 
        break 
      case "SignupFormView": 
        renderFormComponent = SignupFormView; 
        break 
      default: 
        renderFormComponent = EmailFormView; 
        break 
    } 

    return ( 
      <section className="modal"> 
        <section className="modal-screen"> 
          <div className="close-button" onClick={this.props.toggleSessionModal}>&times;</div> 
          {renderFormComponent} 
          {executeRedirect} 
        </section> 
      </section> 
    ); 
  }; 
}; 

export default SessionForm; 
