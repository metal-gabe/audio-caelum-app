import {
  RECEIVE_ERRORS,
} from '../actions/song_actions';
import { merge } from 'lodash';

const SongErrorsReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ERRORS:
      return (action.errors);
    // case RECEIVE_CURRENT_USER:
    //   newState = [];
    //   return (newState);
    default:
      return (oldState);
  }
};

export default SongErrorsReducer;
