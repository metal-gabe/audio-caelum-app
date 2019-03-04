import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import UploadNavbar from './upload_navbar';
import UploadForm from './upload_form';
import UploadFooter from './upload_footer';

class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: '',
      audioFile: '',
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    const songFormData = new FormData();
    songFormData.append('song[songTitle]', this.state.songTitle);

    if (this.state.audioFile) {
      songFormData.append('song[audioFile]', this.state.audioFile);
    }
    this.props.createSong(songFormData);
  };

  render() {
    return (
      <div className="content">
        <NavbarContainer />
        <div className="upload-content">
          <UploadNavbar />
          <UploadForm />
          <UploadFooter />
        </div>
      </div>
    );
  };
};

export default UploadPage;
