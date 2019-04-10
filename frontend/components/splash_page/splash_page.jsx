import React, { Component } from 'react';
import { Link, withRouter, Redirect, Route } from 'react-router-dom';
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

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { username: 'bueller', email: 'b@b.com', password: 'password' };
    this.props.login(demoUser);
  };

  render() {
    const renderSessionForm = this.state.sessionModalIsOpen ?
      <SessionFormContainer toggleSessionModal={this.toggleSessionModal} /> : null

    return (
      <div className="splash-page">
        {renderSessionForm}
        <header>
          <div className="header-info">
            <div className="logo-banner">
              <div className="logo"></div>
              <h4>AudioCaelum</h4>
            </div>
            <div className="authorization">
              <Link
                to=""
                className="signin"
                onClick={this.toggleSessionModal}
              >
                Sign in
              </Link>
              <Link
                to=""
                className="signup"
                onClick={this.toggleSessionModal}
              >
                Create account
              </Link>
              <Link
                to=""
                className="demo-login"
                onClick={this.demoLogin}
              >
                Demo Login
              </Link>
            </div>
          </div>
          <div className="carousel"></div>
        </header>
        <section className="search"></section>
        <section className="trending"></section>
        <section className="mobile"></section>
        <section className="creators"></section>
        <footer></footer>
      </div>
    );
  };
};

export default SplashPage;
