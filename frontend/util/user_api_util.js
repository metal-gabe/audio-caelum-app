/* eslint-disable no-undef */
export const createUserAPI = user => {
   return $.ajax({
      method: `POST`,
      url: `/api/users`,
      data: user,
      contentType: false,
      processData: false,
   });
};

export const fetchAllUsersAPI = () => {
   return $.ajax({
      method: `GET`,
      url: `/api/users`,
   });
};

export const fetchUserAPI = id => {
   return $.ajax({
      method: `GET`,
      url: `/api/users/${id}`,
   });
};

// TODO :: Add the below update action to my controller
export const updateUserAPI = id => {
   return $.ajax({
      method: `PATCH`,
      url: `/api/users/${id}`,
   });
};

export const deleteUserAPI = id => {
   return $.ajax({
      method: `DELETE`,
      url: `/api/users/${id}`,
   });
};
