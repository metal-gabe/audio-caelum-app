import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import classNames from 'classnames';
import { UserMenu, SystemMenu } from './navbar_menus';

class NavbarRight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMenuShown: false,
      systemMenuShown: false,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleUserMenu = this.toggleUserMenu.bind(this);
    this.toggleSystemMenu = this.toggleSystemMenu.bind(this);
  };

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  };

  toggleUserMenu() {
    this.setState({
      userMenuShown: !this.state.userMenuShown,
      systemMenuShown: false,
    });
  };

  toggleSystemMenu() {
    this.setState({
      userMenuShown: false,
      systemMenuShown: !this.state.systemMenuShown,
    });
  };

  render() {
    const btnClassUpload = classNames({
      upload: true,
      'nav-button': true,
      'nav-selected': this.props.isActive,
    });
    const btnClassUserMenu = classNames({
      'nav-button': true,
      'menu-user': true,
      // 'menu-is-shown': this.state.userMenuShown,
    });
    const btnClassSysMenu = classNames({
      'nav-button': true,
      'menu-system': true,
      // 'menu-is-shown': this.state.systemMenuShown,
    });

    const renderUserMenu = this.state.userMenuShown ?
      <UserMenu /> : null

    const renderSystemMenu = this.state.systemMenuShown ?
      <SystemMenu handleLogout={this.handleLogout} /> : null

    return (
      <div className="navbar-right">
        <Link
          className={btnClassUpload}
          onClick={this.props.updateIsActive}
          to='/upload'>
          <div>Upload</div>
        </Link>
        <div className={btnClassUserMenu} onClick={this.toggleUserMenu}>
          <span className="profile-img">
            <img src={window.images.UserProfileImg} />
          </span>
          {this.props.currentUser.username}
          <span>&#62;</span>
          {renderUserMenu}
        </div>
        <div className={btnClassSysMenu} onClick={this.toggleSystemMenu}>
          <div className="ellipsis">&#8230;</div>
          {renderSystemMenu}
        </div>
      </div>
    );
  };
};

export default NavbarRight;
