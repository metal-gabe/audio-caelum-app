import React, { Component } from 'react';

class UploadForm extends Component {
  constructor(props) {
    super(props);

    this.facts = [
      'Say cheese? Victorians said "prunes" instead.',
      "Forrest Mars, the creator of Peanut M&M's, was allergic to peanuts.",
      "IKEA consumes about 1 percent of the world's lumber.",
      'Viking burials included board games.',
      'Eggplants are berries.',
      'When feeding, a hummingbird can lick 10 to 15 times per second.',
      'A newborn blue whale gains about 200 pounds a day during its first year.',
      'Geckos can turn the stickiness of their feet on and off at will.',
      'There are 293 ways to make change for a U.S. dollar.',
      'Almonds and peaches are members of the same family.',
      'Salvador Dalí designed the Chupa Chups logo.',
      'A group of pugs is called a grumble.',
      'The verb "unfriend" appeared in 1659.',
      'The first item sold on eBay was a broken laser pointer.',
      'Your hair contains traces of gold.',
      'Fish cough.',
      'The Square Dance is the official state dance (or folk dance) of 24 states.',
      'Chinese checkers was invented in Germany.',
      'LEGO has an underground vault with every set ever made.',
      'According to a 2015 study, sarcasm can promote creative thinking.'
    ];

    this.state = {
      songTitle: '',
      audioFile: null,
      artistId: this.props.currentUser.id,
      currRandomFact: this.randomFact(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
    this.randomFact = this.randomFact.bind(this);

    setInterval(() => {
      this.setState({
        currRandomFact: this.randomFact()
      });
    }, 30000);
  };

  /* ---------------------------------------------
  // INTERNAL METHODS AFTER THE CONSTRUCTOR
  --------------------------------------------- */
  randomFact() {
    const randNum = Math.floor(Math.random()*this.facts.length);
    const randFact = this.facts[randNum];
    return (randFact);
  };

  update(field) {
    return ((e) => this.setState({
      [field]: e.target.value,
    }));
  };

  updateAudioFile(e) {
    this.setState({ audioFile: e.currentTarget.files[0] });
  };

  selectFile(e) {
    e.preventDefault();
    const fileInput = document.querySelector('.file-picker');
    fileInput.click();
  };

  handleSubmit(e) {
    e.preventDefault();
    const songFormData = new FormData();
    songFormData.append('song[song_title]', this.state.songTitle);
    songFormData.append('song[artist_id]', this.state.artistId);

    if (this.state.audioFile) {
      songFormData.append('song[audio_file]', this.state.audioFile);
    }

    this.props.createSong(songFormData)
    .then(() => {
      this.props.history.push(`/${this.props.currentUser.username}/${this.state.songTitle}`);
    });
  };

  grabErrors() {
    const errors = this.props.errors.songs;
    const allErrors = errors.map((error) => {
      return (
        <li>error</li>
      );
    });
    return (allErrors);
  };

  render() {
    const renderSubmitButton = this.state.audioFile && (this.state.songTitle !== '') ?
      <input className="submit-song" type="submit" onClick={this.handleSubmit} value="Submit your song" />
        : null

    const renderRandomFact = (
      <div className="chosen-fact">
        <span>Did You Know?</span>
        <span>&#10137;</span>
        <span>{this.state.currRandomFact}</span>
      </div>
    );
    // Find a way to make this use setInterval to constantly update the fact

    const renderSongName = this.state.audioFile ?
      <div className="song-name">Current File: "{this.state.audioFile.name}"</div> : null

    const renderErrors = this.props.errors ? <ul className="errors">{this.grabErrors()}</ul> : null

    /* ---------------------------------------------
    // FINAL RENDER & RETURN
    --------------------------------------------- */
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
            {renderSongName}
            <input
              required
              className="song-title"
              type="text"
              placeholder="Now, add a title for your song..."
              value={this.state.songTitle}
              onChange={this.update('songTitle')}
            />
            {renderSubmitButton}
            {renderErrors}
          </form>
          <p className="mac-or-pc">
            <span>Mac or PC?:</span>
            <span><input type="radio" name="macOrPc" /> Mac is wack!</span>
            <span><input type="radio" name="macOrPc" defaultChecked /> PC is greasy!</span>
          </p>
        </div>
        <div className="file-type-restrictions">
          Provide 1 file only, of type MP3 or M4A
        </div>
        <div className="rando-facts">
          {renderRandomFact}
        </div>
      </div>
    );
  };
};

export default UploadForm;
