import React, { Component } from 'react';
import { Link, withRouter, Redirect, Route } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import SearchBar from '../navbar/search_bar';
import appStoreBadge from '../../../app/assets/images/splash_page/app_store_badges/apple-app-store.png';
import playStoreBadge from '../../../app/assets/images/splash_page/app_store_badges/google-play-store.png';

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
        <section className="splash-search"><SearchBar /></section>
        <section className="splash-trending">
          <h2>Hear what's trending for free in the AudioCaelum community</h2>
          <div className="trending-songs">
            Stuff goes here
          </div>
        </section>
        <section className="splash-mobile">
          <div className="devices"></div>
          <div className="mobile-caption">
            <p>Never stop listening</p>
            <div className="color-divider"></div>
            <p>
              AudioCaelum is available here only.<br />
              But you can find really cool games & apps at these locations:
            </p>
            <div className="mobile-links">
              <div className="app-store">
                <a href=''>
                  <img
                    alt='Download on the App Store'
                    src={appStoreBadge}
                  />
                </a>
              </div>
              <div className="play-store">
                <a href='https://play.google.com/store/apps/details?id=com.soundcloud.android&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <img
                    alt='Get it on Google Play'
                    src={playStoreBadge}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="splash-creators">
          <div className="creators-caption">
            <h2>Calling all creators</h2>
            <p>
              Get on AudioCaelum <span>(and remember, you sell your soul)</span> to connect with fans & share your sounds. What are you waiting for? 😈
            </p>
            <Link
              to=""
              className="creators-start"
              onClick={this.toggleSessionModal}
            >
              Get started now
            </Link>
          </div>
        </section>
        <section className="splash-thanks">
          <h1>Thanks for listening. Now join in.</h1>
          <h3>
            Upload tracks, hear songs and sleep peacefully. All for free (sort of).
          </h3>
          <Link
            to=""
            className="signup-large"
            onClick={this.toggleSessionModal}
          >
            Create account
          </Link>
          <div className="account-exists">
            <p>Already have an account?</p>
            <Link
              to=""
              className="signin-large"
              onClick={this.toggleSessionModal}
            >
              Sign in
            </Link>
          </div>
        </section>
        <div className="footer-container">
          <footer>Footer</footer>
        </div>
      </div>
    );
  };
};

export default SplashPage;
