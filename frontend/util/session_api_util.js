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
    method: 'DELETE', 
    dataType: 'json', 
    url: `/api/session`, 
  })); 
}; 
