import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = `RECEIVE_CURRENT_USER`;
export const LOGOUT_CURRENT_USER = `LOGOUT_CURRENT_USER`;
export const RECEIVE_ERRORS = `RECEIVE_ERRORS`;

/* ---------------------------------------------
// NORMAL ACTION CREATORS
--------------------------------------------- */
const receiveCurrentUserAC = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user,
  });
};
const logoutCurrentUserAC = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
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
export const signupAC = (user) => (dispatch) => {
  return (SessionApiUtil.signupAPI(user)
    .then(
      (user) => dispatch(receiveCurrentUserAC(user)),
      (error) => dispatch(receiveErrorsAC(error.responseText))
    )
  );
};
export const loginAC = (user) => (dispatch) => {
  return (SessionApiUtil.loginAPI(user)
    .then(
      (user) => dispatch(receiveCurrentUserAC(user)),
      (error) => {
        // console.log(error);
        dispatch(receiveErrorsAC(error.responseText));
      }
    )
  );
};
export const logoutAC = () => (dispatch) => {
  return (SessionApiUtil.logoutAPI()
    .then(
      (user) => dispatch(logoutCurrentUserAC(user)),
      (error) => dispatch(receiveErrorsAC(error.responseText))
    )
  );
};
