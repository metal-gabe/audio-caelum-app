import {
  PLAY_SONG,
  RECEIVE_SONG,
} from '../actions/song_actions';

const PlayingSongReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case PLAY_SONG:
      newState = { playingSong: action.songId };
      return (newState);
    default:
      return (oldState);
  }
};

export default PlayingSongReducer;
