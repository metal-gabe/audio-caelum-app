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
