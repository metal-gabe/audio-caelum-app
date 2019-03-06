import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import classNames from 'classnames';

class UploadNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadNavIsActive: false,
    };
  };

  render() {
    return (
      <div className="upload-navbar">
        <ul className="upload-navbar-list">
          <li><Link to="/upload">Upload</Link></li>
          {/* <li><Link to="">Your tracks</Link></li> */}
          {/* <li><Link to="">For fun</Link></li> */}
        </ul>
      </div>
    );
  };
};

export default UploadNavbar;
