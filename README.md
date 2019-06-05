# AudioCaelum

[Live Demo: gfl-ac.herokuapp.com](http://gfl-ac.herokuapp.com/)

## About 

AudioCaelum is a music sharing, discovery and entertainment web app. The source inspiration coming from SoundCloud.

From conception, design & documentation to implementation, the initial version was built over a 10 day period. However, I will continue to update, add features and, overall, refine the quality of the site.

## Technology 
* React / Redux (frontend) 
* Ruby on Rails (backend) 
* PostgreSQL (database) 

## Features

* Secure frontend to backend user authentication using BCrypt
* Asynchronous & continuous global audio player
    - Keyboard spacebar play/pause functionality
* Instant database AJAX query to verify user email during signup/login
* User is able to upload their own songs
    - Custom file restrictions on song uploads

## Code Example 

```
// This is a custom class function to toggle play/pause of the currently loaded song in state using the keyboard's spacebar 

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

## Images 

![AudioCaelum Home Page](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-01.png) 

![AudioCaelum 2](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-02.png) 

![AudioCaelum 3](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-03.png) 

![AudioCaelum 4](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-04.png) 

![AudioCaelum 5](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-05.png) 

![AudioCaelum 6](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-06.png) 
