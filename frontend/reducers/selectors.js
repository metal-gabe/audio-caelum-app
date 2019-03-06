function selectSong(state, songTitle) {
  // debugger
  const songs = Object.values(state.entities.songs);
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].songTitle.toLowerCase() === songTitle.toLowerCase()) {
      return songs[i];
    }
  }
};

export default selectSong;
