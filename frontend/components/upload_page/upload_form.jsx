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
    this.selectFile = this.selectFile.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
  };

  update(field) {
    return ((e) => this.setState({
      [field]: e.target.value,
    }));
  };

  updateAudioFile() {
    const file = document.querySelector('.file-picker').files[0];
    console.log(file);
    this.setState({
      audioFile: file,
    });
  };

  selectFile(e) {
    e.preventDefault();
    const fileInput = document.querySelector('.file-picker');
    fileInput.click();
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

  resetState() {
    this.setState({
      songTitle: '',
      audioFile: '',
    });
  };

  render() {
    console.log(this.state);

    const renderSubmitButton = this.state.audioFile && (this.state.songTitle !== '') ?
      <input className="submit-song" type="submit" onClick={this.handleSubmit} value="Submit your song" />
        : null

    return (
      <div className="upload-form">
        <div className="uploader">
          <h1>Do you want to drag and drop your tracks? <span>( sorry, not today 😉 )</span></h1>
          <form action="">
            <input
              required
              className="file-picker"
              type="file"
              accept=".mp3, .m4a"
              onChange={this.updateAudioFile}
            />
            <button onClick={this.selectFile}>instead, choose A FILE to upload</button>
            <input
              className="song-title"
              type="text"
              placeholder="Now, add a title for your song..."
              onChange={this.update('songTitle')}
            />
            {renderSubmitButton}
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
