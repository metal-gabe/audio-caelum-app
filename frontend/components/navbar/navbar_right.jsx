import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import classNames from 'classnames';

class NavbarRight extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  };

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    const btnClassUpload = classNames({
      upload: true,
      'nav-button': true,
      'nav-selected': this.props.isActive,
    });

    return (
      <div className="navbar-right">
        <Link
          className={btnClassUpload}
          onClick={this.props.updateIsActive}
          to='/upload'>
          <div>Upload</div>
        </Link>
        <div className="menu-user nav-button">
          <span className="profile-img">
            <img src={window.images.UserProfileImg} />
          </span>
          {this.props.currentUser.email}
          <span>&#62;</span>
        </div>
        <div className="menu-system nav-button">
          <div className="ellipsis">&#8230;</div>
          <div className="menu-content">
            <ul>
              <li>About us</li>
              <li>Legal</li>
              <li>Copyright</li>
            </ul>
            <ul>
              <li>Subscription</li>
              <li>Settings</li>
              <li onClick={this.handleLogout}>Sign out</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

export default NavbarRight;
