import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

class NavbarLeft extends Component {
  render() {
    return (
      <div className="navbar-left">
        <Link className="nav-button logo" to='/'></Link>
        <Link className="nav-button" to='/discover'>
          <div>Home</div>
        </Link>
        <Link className="nav-button" to='/stream'>
          <div>Stream</div>
        </Link>
        <Link className="nav-button" to='/you/library'>
          <div>Library</div>
        </Link>
      </div>
    );
  };
};

export default NavbarLeft;
