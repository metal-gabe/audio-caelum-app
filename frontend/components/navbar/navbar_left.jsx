import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import classNames from 'classnames';

class NavbarLeft extends Component {
  render() {
    const btnClassLogo = classNames({
      logo: true,
      'nav-button': true,
      // 'nav-selected': this.props.isActive,
    });
    const btnClass = classNames({
      'nav-button': true,
      'nav-selected': this.props.homeBtnIsActive,
    });

    return (
      <div className="navbar-left">
        <Link
          className={btnClassLogo}
          // onClick={this.props.updateIsActive}
          to='/'>
        </Link>
        <Link
          className={btnClass}
          onClick={this.props.updateIsActive}
          to='/discover'>
          <div>Home</div>
        </Link>
        {/*
        <Link
          className={btnClass}
          onClick={this.props.updateIsActive}
          to='/stream'>
          <div>Stream</div>
        </Link>
        <Link
          className={btnClass}
          onClick={this.props.updateIsActive}
          to='/you/library'>
          <div>Library</div>
        </Link>
        */}
      </div>
    );
  };
};

export default NavbarLeft;

// <p>{this.props.match.path}</p>
  // Potentially use the props.match.path to determine the active link/button
