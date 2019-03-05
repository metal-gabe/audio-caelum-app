export const createSongAPI = (song) => {
  return ($.ajax({
    method: `POST`,
    url: `/api/songs`,
    data: song,
    contentType: false,
    processData: false,
  }));
};
export const fetchAllSongsAPI = () => {
  return ($.ajax({
    method: `GET`,
    url: `/api/songs`,
  }));
};
export const fetchSongAPI = (id) => {
  return ($.ajax({
    method: `GET`,
    url: `/api/songs/${id}`,
  }));
};
export const updateSongAPI = (song) => {
  return ($.ajax({
    method: `PATCH`,
    url: `/api/songs/${song.id}`,
    data: { song },
  }));
};
export const deleteSongAPI = (id) => {
  return ($.ajax({
    method: `DELETE`,
    url: `/api/songs/${id}`,
  }));
};
