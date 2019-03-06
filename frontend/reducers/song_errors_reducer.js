import {
  RECEIVE_SONG_ERRORS,
} from '../actions/song_actions';
import { merge } from 'lodash';

const SongErrorsReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SONG_ERRORS:
      return (action.errors);
    default:
      return (oldState);
  }
};

export default SongErrorsReducer;
