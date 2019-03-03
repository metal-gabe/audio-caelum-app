import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

class Navbar extends Component {
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
      <section id="navbar">
        <div>I am your Navbar</div>
        <div>{this.props.currentUser.email}</div>
        <input
          type="submit"
          value="Logout"
          onClick={this.handleLogout}
        />
      </section>
    );
  };
};

export default Navbar;
