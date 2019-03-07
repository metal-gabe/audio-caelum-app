import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = `RECEIVE_ALL_SONGS`;
export const RECEIVE_SONG = `RECEIVE_SONG`;
export const REMOVE_SONG = `REMOVE_SONG`;
export const RECEIVE_SONG_ERRORS = `RECEIVE_SONG_ERRORS`;

/* ---------------------------------------------
// NORMAL ACTION CREATORS
--------------------------------------------- */
const receiveAllSongsAC = (songs) => {
  return ({
    type: RECEIVE_ALL_SONGS,
    songs,
  });
};
const receiveSongAC = (song) => {
  return ({
    type: RECEIVE_SONG,
    song,
  });
};
const removeSongAC = (id) => {
  return ({
    type: REMOVE_SONG,
    songId: id,
  });
};
const receiveSongErrorsAC = (errors) => {
  return ({
    type: RECEIVE_SONG_ERRORS,
    errors,
  });
};

/* ---------------------------------------------
// THUNK ACTION CREATORS
--------------------------------------------- */
export const createSongAC = (song) => (dispatch) => {
  return (SongApiUtil.createSongAPI(song).then(
    (song) => dispatch(receiveSongAC(song)),
    (error) => dispatch(receiveSongErrorsAC(error.responseJSON))
  ));
};
export const requestAllSongsAC = () => (dispatch) => {
  return (SongApiUtil.fetchAllSongsAPI().then(
    (payload) => dispatch(receiveAllSongsAC(payload)),
    (error) => dispatch(receiveSongErrorsAC(error.responseJSON))
  ));
};
export const requestSongAC = (songTitle) => (dispatch) => {
  return (SongApiUtil.fetchSongAPI(songTitle).then(
    (song) => dispatch(receiveSongAC(song)),
    (error) => dispatch(receiveSongErrorsAC(error.responseJSON))
  ));
};
export const updateSongAC = (song) => (dispatch) => {
  return (SongApiUtil.updateSongAPI(song).then(
    (song) => dispatch(receiveSongAC(song)),
    (error) => dispatch(receiveSongErrorsAC(error.responseJSON))
  ));
};
export const deleteSongAC = (id) => (dispatch) => {
  return (SongApiUtil.deleteSongAPI(id).then(
    (id) => dispatch(removeSongAC(id)),
    (error) => dispatch(receiveSongErrorsAC(error.responseJSON))
  ));
};
