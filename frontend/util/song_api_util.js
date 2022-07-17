/* eslint-disable no-undef */
export const createSongAPI = song => {
   return $.ajax({
      method: `POST`,
      url: `/api/songs`,
      data: song,
      contentType: false,
      processData: false,
   });
};
export const fetchAllSongsAPI = () => {
   return $.ajax({
      method: `GET`,
      url: `/api/songs`,
   });
};
export const fetchSongAPI = songTitle => {
   return $.ajax({
      method: `GET`,
      url: `/api/songs/${songTitle}`,
      data: { song: { song_title: songTitle } },
   });
};
export const updateSongAPI = song => {
   return $.ajax({
      method: `PATCH`,
      url: `/api/songs/${song.id}`,
      data: { song },
   });
};
export const deleteSongAPI = id => {
   return $.ajax({
      method: `DELETE`,
      url: `/api/songs/${id}`,
   });
};
