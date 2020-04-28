# AudioCaelum

[Live Demo: gfl-ac.herokuapp.com](http://gfl-ac.herokuapp.com/)

AudioCaelum is a music sharing, discovery and entertainment web app. The source inspiration coming from SoundCloud.

From conception, design & documentation to implementation, the initial version was built over a 10 day period. However, I will continue to update, add features and, overall, refine the quality of the site.

## Technology

- React / Redux (frontend)
- Ruby on Rails (backend)
- PostgreSQL (database)

\*\* All images and music files were hosted using Amazon Web Services (AWS) S3.

## Features

- Asynchronous & continuous global audio player
  - Keyboard spacebar play/pause functionality
- Instant database AJAX query to verify user email during signup/login
- User is able to upload their own songs
  - Custom file restrictions on song uploads
- Secure frontend to backend user authentication using BCrypt

![AudioCaelum Home Page](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-01.png)

## Async Audio Player

This is one of the main features that drew me to this project. The goal of the player is to continuously play music while a user browses the site. As they go from section to section, "page" to "page", the audio is still going until the user decides to stop it.

To implement this, I made use of Redux's global store. As a user selects a song to play, the song is pulled from the `entities` slice of state using a custom selector method (see code snippet below) which then gets passed through it's own custom reducer. From here, I send the object along to the `ui` slice of state where the audio player component can read whether a song is loaded or not.

![AudioCaelum 6](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-06.png)

```JavaScript
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

```JavaScript
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

As I was building out the user/session auth, I noticed that SoundCloud did something I hadn't seen before. As a user enters their email into the form the database is immediately queried to verify the existence of the input. If the response is `true` then the modal renders a `login` form next. If the response is `false` then the modal renders a `signup` form.

The first step to implementing this was to create a custom, RESTful API call that would go straight to the database. Since I only needed to check existence, I bypassed the use of thunks or reducers on the frontend.

However, a potential pitfall of this idea is that if two users have the same email address. To avoid any troubles this might cause, uniqueness constraints and validations were placed on the backend.

![AudioCaelum 2](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-02.png)

```JavaScript
export const verifyEmailAPI = (email) => {
  return ($.ajax({
    method: `GET`,
    url: `/api/users/email`,
    data: { email },
    success: () => true,
    failure: () => false,
  }));
};
```

```Ruby
# ---------------------------------------------
# Custom method on the backend on the "users_controller"
# ---------------------------------------------
def verify_email_db
  @user = User.find_by(email: params[:email])

  if @user
    render json: 'true', status: 200
  else
    render json: 'false', status: 404
  end
end
```

Once the response comes back, I then use the component's local state, a custom class method and conditional checking to render the appropriate form component.

```JavaScript
checkEmail(email) {
  return ((e) => {
    e.preventDefault();

    if (email === '') {
      return
    } else {
      this.props.checkEmail(email).then(
        () => { this.setState({ currentFormComponent: "LoginFormView"  }); },
        () => { this.setState({ currentFormComponent: "SignupFormView" }); },
      );
    }
  });
};
```

If the response from my backend comes back as `true`, I render the `login_form` component with the email pre-filled out.

![AudioCaelum 3](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-03.png)

If the response from my backend comes back as `false`, I render the `signup_form` component with the email pre-filled out.

![AudioCaelum 4](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-04.png)

## User Uploads

One of the challenging parts of this form was implementing a custom `file_picker` button. I did this by inserting the standard `input` HTML element, then hiding it (`.file-picker { display: none; }`) using S/CSS. From there, I added the `button` element that I wanted displayed and used a custom class method to initiate a virtual click.

To make sure the user only selected files that were compatible with my backend, I added some constraints to the `input` element that only allowed `.mp3` or `.m4a` files. This worked natively with the OS/browser file picker to grey out options that would not be accepted.

![AudioCaelum 5](https://github.com/gflujan/AudioCaelum/blob/master/docs/readme_pix/gfl-ac-05.png)

```JSX
<input
  required
  className="file-picker"
  type="file"
  accept=".mp3, .m4a"
  onChange={this.updateAudioFile}
/>

<button onClick={this.selectFile}>instead, choose A FILE to upload</button>
```

```JavaScript
/* ---------------------------------------------
// Custom class method to create a virtual click
// onto the actual .file-picker input element
--------------------------------------------- */
selectFile(e) {
  e.preventDefault();
  const fileInput = document.querySelector('.file-picker');
  fileInput.click();
};
```

## Future Features & Tasks

- Dynamically render audio player whether there is a song/playlist stored or not
- Incorporate user playlists
- Add like & follow functionality
- Build out a user's profile page
