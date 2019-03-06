import React, { Component } from 'react';
import NavbarContainer from '../navbar/navbar_container';

class DiscoverPage extends Component {
  componentDidMount() {
    this.props.requestAllSongs();
  };

  render() {
    return (
      <div className="content">
        <NavbarContainer />
        <div className="discover-content">
          <h1>I am the discover page</h1>
        </div>
      </div>
    );
  };
};

export default DiscoverPage;
