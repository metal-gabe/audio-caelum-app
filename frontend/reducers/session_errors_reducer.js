import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { merge } from 'lodash';

const SessionErrorsReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return (action.errors);
    case RECEIVE_CURRENT_USER:
      newState = [];
      return (newState);
    default:
      return (oldState);
  }
};

export default SessionErrorsReducer;
