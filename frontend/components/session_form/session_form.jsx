import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import EmailForm from './email_form';
import LoginForm from './login_form';
import SignupForm from './signup_form';

class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

      this.props.checkEmail(email).then(
        () => { this.setState({ currentFormComponent: "LoginFormView"  }); },
        () => { this.setState({ currentFormComponent: "SignupFormView" }); }
      );
    });
  };

  updateFormComponent(comp) {
    this.setState({ currentFormComponent: comp });
  };

  handleLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    delete user.currentFormComponent;
    this.props.login(user);
    // this.resetState(); // chain this into a .then() on the line above
  };

  handleSignup(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    delete user.currentFormComponent;
    this.props.signup(user);
    // this.resetState(); // chain this into a .then() on the line above
  };

  resetState() {
    this.setState({
      password: '',
      email: '',
      currentFormComponent: '',
      loggedIn: false,
    });
  };

  render() {
    const EmailFormView = <EmailForm
      checkEmail={this.checkEmail}
      email={this.state.email}
      errors={this.props.errors}
      update={this.update}
    />;
    const LoginFormView = <LoginForm
      handleLogin={this.handleLogin}
      email={this.state.email}
      errors={this.props.errors}
      updateFormComponent={this.updateFormComponent}
      update={this.update}
    />;
    const SignupFormView = <SignupForm
      handleSignup={this.handleSignup}
      email={this.state.email}
      errors={this.props.errors}
      updateFormComponent={this.updateFormComponent}
      update={this.update}
    />;

    const executeRedirect = this.props.loggedIn ?
      <Redirect to="/discover" /> : null

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
