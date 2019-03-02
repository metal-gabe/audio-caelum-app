import * as SongApiUtil from '../util/song_api_util'; 

export const RECEIVE_ALL_SONGS = `RECEIVE_ALL_SONGS`; 
export const RECEIVE_SONG = `RECEIVE_SONG`; 
export const REMOVE_SONG = `REMOVE_SONG`; 

/* --------------------------------------------- 
// NORMAL ACTION CREATORS 
--------------------------------------------- */ 
const receiveAllSongsAC = (payload) => { 
  return ({ 
    type: RECEIVE_ALL_SONGS, 
    payload, 
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
const receiveErrorsAC = (errors) => { 
  return ({ 
    type: RECEIVE_ERRORS, 
    errors, 
  }); 
}; 

/* --------------------------------------------- 
// THUNK ACTION CREATORS 
--------------------------------------------- */ 
export const createSongAC = (song) => (dispatch) => { 
  return (SongApiUtil.createSongAPI(song)
    .then( 
      (song) => dispatch(receiveSongAC(song)), 
      (error) => dispatch(receiveErrorsAC(error.responseJSON)) 
    ) 
  ); 
}; 
export const requestAllSongsAC = () => (dispatch) => { 
  return (SongApiUtil.createSongAPI()
    .then( 
      (payload) => dispatch(receiveAllSongsAC(payload)), 
      (error) => dispatch(receiveErrorsAC(error.responseJSON)) 
    ) 
  ); 
}; 
export const requestSongAC = (id) => (dispatch) => { 
  return (SongApiUtil.createSongAPI(id)
    .then( 
      (song) => dispatch(receiveSongAC(song)), 
      (error) => dispatch(receiveErrorsAC(error.responseJSON)) 
    ) 
  ); 
}; 
export const updateSongAC = (song) => (dispatch) => { 
  return (SongApiUtil.createSongAPI(song)
    .then( 
      (song) => dispatch(receiveSongAC(song)), 
      (error) => dispatch(receiveErrorsAC(error.responseJSON)) 
    ) 
  ); 
}; 
export const deleteSongAC = (id) => (dispatch) => { 
  return (SongApiUtil.createSongAPI(id)
    .then( 
      (id) => dispatch(removeSongAC(id)), 
      (error) => dispatch(receiveErrorsAC(error.responseJSON)) 
    ) 
  ); 
}; 
