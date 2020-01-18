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
  }

  handleLogout(e) {
    const { history, logout } = this.props;

    e.preventDefault();
    logout();
    history.push('/');
  }

  toggleUserMenu() {
    const { userMenuShown } = this.state;

    this.setState({
      userMenuShown: !userMenuShown,
      systemMenuShown: false,
    });
  }

  toggleSystemMenu() {
    const { systemMenuShown } = this.state;

    this.setState({
      userMenuShown: false,
      systemMenuShown: !systemMenuShown,
    });
  }

  render() {
    const { userMenuShown, systemMenuShown } = this.state;
    const { currentUser, updateIsActive, uploadBtnIsActive } = this.props;
    const { email, profileImgUrl, username } = currentUser;

    /* ---------------------------------------------
    // "CLASSNAMES" OBJECTS FOR DYNAMIC STYLING
    --------------------------------------------- */
    const btnClassUpload = classNames({
      upload: true,
      'nav-button': true,
      'nav-selected': uploadBtnIsActive,
    });
    const btnClassUserMenu = classNames({
      'nav-button': true,
      'menu-user': true,
      'menu-is-shown': userMenuShown,
    });
    const btnClassSysMenu = classNames({
      'nav-button': true,
      'menu-system': true,
      'menu-is-shown': systemMenuShown,
    });

    /* ---------------------------------------------
    // RENDERING MENUS & USER INFO
    --------------------------------------------- */
    const renderUserMenu = userMenuShown ? <UserMenu /> : null;

    const renderSystemMenu = systemMenuShown ? (
      <SystemMenu handleLogout={this.handleLogout} />
    ) : null;

    const renderUserInfo = username || email;
    const renderProfileImg = profileImgUrl || window.images.defaultProfileImg;

    /* ---------------------------------------------
    // FINAL RETURN/RENDER/OUTPUT
    --------------------------------------------- */
    return (
      <div className="navbar-right">
        <Link className={btnClassUpload} onClick={updateIsActive} to="/upload">
          <div>Upload</div>
        </Link>
        <div
          className={btnClassUserMenu}
          onClick={() => {}}
          onKeyPress={this.toggleUserMenu}
          role="button"
          tabIndex={0}
        >
          <span className="profile-img">
            <img alt="User Profile" src={renderProfileImg} />
          </span>
          {renderUserInfo}
          <span>&#62;</span>
          {renderUserMenu}
        </div>
        <div
          className={btnClassSysMenu}
          onClick={() => {}}
          onKeyPress={this.toggleSystemMenu}
          role="button"
          tabIndex={0}
        >
          <div className="ellipsis">&#8230;</div>
          {renderSystemMenu}
        </div>
      </div>
    );
  }
}

export default NavbarRight;
