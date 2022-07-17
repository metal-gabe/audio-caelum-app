export const createUserAPI = user => {
   return $.ajax({
      'method': `POST`,
      'url': `/api/users`,
      'data': user,
      'contentType': false,
      'processData': false,
   });
};

export const fetchAllUsersAPI = () => {
   return $.ajax({
      'method': `GET`,
      'url': `/api/users`,
   });
};

export const fetchUserAPI = id => {
   return $.ajax({
      'method': `GET`,
      'url': `/api/users/${id}`,
   });
};

// Still need to add the below update action in my controller
export const updateUserAPI = id => {
   return $.ajax({
      'method': `PATCH`,
      'url': `/api/users/${id}`,
   });
};

export const deleteUserAPI = id => {
   return $.ajax({
      'method': `DELETE`,
      'url': `/api/users/${id}`,
   });
};
