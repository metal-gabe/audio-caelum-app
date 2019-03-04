import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

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
          <h1>I am the upload page</h1>
        </div>
      </div>
    );
  };
};

export default UploadPage;
