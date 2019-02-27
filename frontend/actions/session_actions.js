import * as SessionApiUtil from '../util/session_api_util'; 

export const RECEIVE_CURRENT_USER = `RECEIVE_CURRENT_USER`; 
export const LOGOUT_CURRENT_USER = `LOGOUT_CURRENT_USER`; 
export const RECEIVE_ERRORS = `RECEIVE_ERRORS`; 

/* --------------------------------------------- 
// NORMAL ACTION CREATORS 
--------------------------------------------- */ 
const receiveCurrentUser = (user) => { 
  return ({ 
    type: RECEIVE_CURRENT_USER, 
    user, 
  }); 
}; 
const logoutCurrentUser = () => { 
  return ({ 
    type: LOGOUT_CURRENT_USER, 
  }); 
}; 
const receiveErrors = (errors) => { 
  return ({ 
    type: RECEIVE_ERRORS, 
    errors, 
  }); 
}; 

/* --------------------------------------------- 
// THUNK ACTION CREATORS 
--------------------------------------------- */ 
export const signup = (user) => (dispatch) => { 
  return (SessionApiUtil.signup(user) 
    .then( 
      (user) => dispatch(receiveCurrentUser(user)), 
      (error) => dispatch(receiveErrors(error.responseJSON)) 
    ) 
  ); 
}; 
export const login = (user) => (dispatch) => { 
  return (SessionApiUtil.signup(user) 
    .then( 
      (user) => dispatch(receiveCurrentUser(user)), 
      (error) => dispatch(receiveErrors(error.responseJSON)) 
    ) 
  ); 
}; 
export const logout = () => (dispatch) => { 
  return (SessionApiUtil.logout() 
    .then( 
      (user) => dispatch(logoutCurrentUser(user)), 
      (error) => dispatch(receiveErrors(error.responseJSON)) 
    ) 
  ); 
}; 
