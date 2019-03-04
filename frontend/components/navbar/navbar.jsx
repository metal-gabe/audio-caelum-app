import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import NavbarLeft from './navbar_left';
import NavbarRight from './navbar_right';
import SearchBarContainer from './search_bar_container';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.updateIsActive = this.updateIsActive.bind(this);
  };

  updateIsActive() {
    // do stuff here
  }

  render() {
    return (
      <section className="nav-parent">
        <nav className="navbar">
          <NavbarLeft />
          <SearchBarContainer />
          <NavbarRight currentUser={this.props.currentUser} />
        </nav>
      </section>
    );
  };
};

export default Navbar;
