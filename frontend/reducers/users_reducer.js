import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { merge } from 'lodash'; 

const UsersReducer = (oldState={}, action) => { 
  Object.freeze(oldState); 
  let newState; 

  switch (action.type) { 
    case RECEIVE_CURRENT_USER: 
      newState = merge({}, oldState, { [action.user.id]: action.user }); 
      return (newState); 
    default: 
      return (oldState); 
  } 
}; 

export default UsersReducer; 
