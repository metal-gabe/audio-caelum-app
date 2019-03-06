import {
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG,
  REMOVE_SONG,
} from '../actions/song_actions';
import { merge } from 'lodash';

const SongsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      // newState = merge({}, oldState, action.songs);
      return (action.songs);
    case RECEIVE_SONG:
      newState = merge({}, oldState, { [action.song.id]: action.song });
      // newState = merge({}, oldState, action.song);
      // debugger
      return (newState);
    case REMOVE_SONG:
      newState = merge({}, oldState);
      delete newState[action.songId];
      return (newState);
    default:
      return (oldState);
  }
};

export default SongsReducer;
