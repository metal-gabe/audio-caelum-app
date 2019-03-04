import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

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
    return (
      <div className="navbar-right">
        <Link className="upload nav-button selected" to='/upload'>
          <div>Upload</div>
        </Link>
        <div className="nav-button menu-user">
          <span className="profile-img">
            <img src={window.images.UserProfileImg} />
          </span>
          {this.props.currentUser.email}
          <span>&#62;</span>
        </div>
        <div className="nav-button menu-system">
          <span className="ellipsis">&#8230;</span>
        </div>
      </div>
    );
  };
};

export default NavbarRight;

// SAVE THIS FOR WHEN I GET THE SYS MENU MODAL WORKING
// <input
//   type="submit"
//   value="Logout"
//   onClick={this.handleLogout}
// />

// font-family: 'Lato', sans-serif;
