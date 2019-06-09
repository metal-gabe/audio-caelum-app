# AudioCaelum

[Live Demo: gfl-ac.herokuapp.com](http://gfl-ac.herokuapp.com/)

AudioCaelum is a music sharing, discovery and entertainment web app. The source inspiration coming from SoundCloud.

From conception, design & documentation to implementation, the initial version was built over a 10 day period. However, I will continue to update, add features and, overall, refine the quality of the site.

## Technology 
* React / Redux (frontend) 
* Ruby on Rails (backend) 
* PostgreSQL (database) 

** All images and music files were hosted using Amazon Web Services (AWS) S3.

## Features

![AudioCaelum Home Page](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-01.png) 

* Asynchronous & continuous global audio player
    - Keyboard spacebar play/pause functionality
* Instant database AJAX query to verify user email during signup/login
* User is able to upload their own songs
    - Custom file restrictions on song uploads
* Secure frontend to backend user authentication using BCrypt 

## Async Audio Player 

This is one of the main features that drew me to this project. The goal of the player is to continuously play music while a user browses the site. As they go from section to section, "page" to "page", the audio is still going until the user decides to stop it.

To implement this, I made use of Redux's global store. As a user selects a song to play, the song is pulled from the `entities` slice of state using a custom selector method (see code snippet below) which then gets passed through it's own, custom reducer. From here, I send the object along to the `ui` slice of state where the audio player component can read whether a song is loaded or not. 

![AudioCaelum 6](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-06.png) 

``` 
function selectSong(state, songTitle) {
  const songs = Object.values(state.entities.songs);
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].songTitle.toLowerCase() === songTitle.toLowerCase()) {
      // The condition in the if statement makes sure that we ignore
      // case sensitivity when pulling the song out of our state
      return songs[i];
    }
  }
};

export default selectSong;
``` 

Another fun part of building out this audio player was adding in the play/pause toggle functionality. This is controlled by the keyboard's spacebar. 

```
/* --------------------------------------------- 
// This is a custom class function to toggle 
// play/pause of the currently loaded song in 
// state using the keyboard's spacebar 
--------------------------------------------- */ 

togglePlayPause(e) {
  const x = e.which;
  const player = document.getElementById('player');
  if (this.props.loadedSong) {
    if (x === 32 && this.state.isSongPlaying) {
      player.pause();
      e.stopPropagation();
      // there might a listener for on spacebar
    } else {
      player.play();
      e.stopPropagation();
    }
    this.setState({ isSongPlaying: !this.state.isSongPlaying, });
  }
};
```

## Session Auth Modal & Email API 

words about auth 

![AudioCaelum 2](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-02.png) 

words about login 

![AudioCaelum 3](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-03.png) 

words about signup 

![AudioCaelum 4](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-04.png) 

## Stuff 

upload page: 
![AudioCaelum 5](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-05.png) 

## Future Features & Tasks 
* Dynamically render audio player whether there is a song/playlist stored or not 
* Incorporate user playlists 
* Add like & follow functionality 
* Build out a user's profile page 
