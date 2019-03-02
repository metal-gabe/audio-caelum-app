import React, { Component } from 'react'; 
import { Link, Redirect, Route } from 'react-router-dom'; 

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
      <div>I am the upload page</div> 
    ); 
  }; 
}; 

export default UploadPage; 
