export const signupAPI = (user) => {
  return ($.ajax({
    method: `POST`,
    url: `/api/users`,
    data: { user },
  }));
};
export const loginAPI = (user) => {
  return ($.ajax({
    method: `POST`,
    url: `/api/session`,
    data: { user },
  }));
};
export const logoutAPI = () => {
  return ($.ajax({
    method: `DELETE`,
    url: `/api/session`,
  }));
};
export const verifyEmailAPI = (email) => {
  return ($.ajax({
    method: `GET`,
    url: `/api/users/email`,
    data: { email },
    success: () => true,
    failure: () => false,
  }));
};
