import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import classNames from 'classnames';

class UploadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songTitle: '',
      audioFile: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div className="upload-form">
        <div className="uploader">
          <h1>Do you want to drag and drop your tracks? <span>( sorry, not today 😉 )</span></h1>
          <form action="">
            <input type="file" visibility="hidden" />
            <button onClick={this.handleSubmit}>instead, choose A FILE to upload</button>
          </form>
          <p className="mac-or-pc">
            Mac or PC?:  <input type="radio" name="macOrPc" /> Mac is wack!  <input type="radio" name="macOrPc" defaultChecked /> PC is greasy!
          </p>
        </div>
        <div className="file-type-restrictions">
          Provide 1 file only, of type MP3 or M4A
        </div>
        <div className="rando-facts">
          Insert random fact generator here.
        </div>
      </div>
    );
  };
};

export default UploadForm;
