import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import NavbarContainer from '../globals/navbar_container';

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
    songFormData.append('song[title]', this.state.songTitle);

    if (this.state.audioFile) {
      songFormData.append('song[audioFile]', this.state.audioFile);
    }
    this.props.createSong(songFormData);
  };

  render() {
    return (
      <div>
        <NavbarContainer />
        <h1>I am the upload page</h1>
      </div>
    );
  };
};

export default UploadPage;
