import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = `RECEIVE_ALL_USERS`;
export const RECEIVE_USER_ERRORS = `RECEIVE_USER_ERRORS`;

/* ---------------------------------------------
// NORMAL ACTION CREATORS
--------------------------------------------- */
const receiveAllUsersAC = users => {
   return {
      type: RECEIVE_ALL_USERS,
      users,
   };
};

const receiveUserErrorsAC = errors => {
   return {
      type: RECEIVE_USER_ERRORS,
      errors,
   };
};

/* ---------------------------------------------
// THUNK ACTION CREATORS
--------------------------------------------- */
export const requestAllUsersAC = () => dispatch => {
   return UserApiUtil.fetchAllUsersAPI().then(
      // success callback
      payload => dispatch(receiveAllUsersAC(payload)),
      // failure callback
      error => dispatch(receiveUserErrorsAC(error.responseJSON)),
   );
};
