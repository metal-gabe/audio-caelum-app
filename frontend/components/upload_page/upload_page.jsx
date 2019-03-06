import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import UploadNavbar from './upload_navbar';
import UploadForm from './upload_form';
import UploadFooter from './upload_footer';

class UploadPage extends Component {
  render() {
    return (
      <div className="content">
        <NavbarContainer />
        <div className="upload-content">
          <UploadNavbar />
          <UploadForm
            createSong={this.props.createSong}
            currentUser={this.props.currentUser}
            history={this.props.history}
            errors={this.props.errors}
          />
          <UploadFooter />
        </div>
      </div>
    );
  };
};

export default UploadPage;
