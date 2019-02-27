import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER, 
} from '../actions/session_actions'; 
import { merge } from 'lodash'; 

const SessionReducer = (oldState={id: null}, action) => { 
  Object.freeze(oldState); 
  let newState; 

  switch (action.type) { 
    case RECEIVE_CURRENT_USER: 
      newState = merge({}, oldState, { id: action.user.id }); 
      return (newState); 
    case LOGOUT_CURRENT_USER: 
      newState = { id: null }; 
      return (newState); 
    default: 
      return (oldState); 
  } 
}; 

export default SessionReducer; 
