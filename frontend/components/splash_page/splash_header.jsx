import React from 'react';
import { Link } from 'react-router-dom';

export const SplashHeader = (props) => {
  return (
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
            onClick={props.toggleSessionModal}
          >
            Sign in
          </Link>
          <Link
            to=""
            className="signup"
            onClick={props.toggleSessionModal}
          >
            Create account
          </Link>
          <Link
            to=""
            className="demo-login"
            onClick={props.demoLogin}
          >
            Demo Login
          </Link>
        </div>
      </div>
      <div className="carousel"></div>
    </header>
  );
};
