import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = `RECEIVE_CURRENT_USER`;
export const LOGOUT_CURRENT_USER = `LOGOUT_CURRENT_USER`;
export const RECEIVE_SESSION_ERRORS = `RECEIVE_SESSION_ERRORS`;

/* ---------------------------------------------
// NORMAL ACTION CREATORS
--------------------------------------------- */
const receiveCurrentUserAC = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};
const logoutCurrentUserAC = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};
const receiveSessionErrorsAC = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

/* ---------------------------------------------
// THUNK ACTION CREATORS
--------------------------------------------- */
export const signupAC = user => dispatch => {
  return SessionApiUtil.signupAPI(user).then(
    currentUser => dispatch(receiveCurrentUserAC(currentUser)),
    error => dispatch(receiveSessionErrorsAC(error.responseJSON))
  );
};
export const loginAC = user => dispatch => {
  return SessionApiUtil.loginAPI(user).then(
    currentUser => dispatch(receiveCurrentUserAC(currentUser)),
    error => dispatch(receiveSessionErrorsAC(error.responseText))
  );
};
export const logoutAC = () => dispatch => {
  return SessionApiUtil.logoutAPI().then(
    currentUser => dispatch(logoutCurrentUserAC(currentUser)),
    error => dispatch(receiveSessionErrorsAC(error.responseText))
  );
};
