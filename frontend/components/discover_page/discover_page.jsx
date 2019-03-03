import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import NavbarContainer from '../globals/navbar_container';

class DiscoverPage extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <h1>I am the discover page</h1>
      </div>
    );
  };
};

export default DiscoverPage;
