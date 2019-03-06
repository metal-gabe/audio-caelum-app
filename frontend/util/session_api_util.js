export const signupAPI = (user) => {
  return ($.ajax({
    method: `POST`,
    url: `/api/users`,
    dataType: 'json',
    data: { user },
  }));
};
export const loginAPI = (user) => {
  return ($.ajax({
    method: `POST`,
    url: `/api/session`,
    dataType: 'json',
    data: { user },
  }));
};
export const logoutAPI = () => {
  return ($.ajax({
    method: `DELETE`,
    url: `/api/session`,
    dataType: 'json',
  }));
};
export const verifyEmailAPI = (email) => {
  return ($.ajax({
    method: `GET`,
    url: `/api/users/${email}`,
    dataType: `json`,
    data: { email },
    success: () => true,
    failure: () => false,
  }));
};
