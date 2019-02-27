export const signup = (user) => { 
  return ($.ajax({ 
    method: `POST`, 
    url: `/api/users`, 
    dataType: 'json', 
    data: { user }, 
  })); 
}; 
export const login = (user) => { 
  return ($.ajax({ 
    method: `POST`, 
    url: `/api/session`, 
    dataType: 'json', 
    data: { user }, 
  })); 
}; 
export const logout = () => { 
  return ($.ajax({ 
    method: 'DELETE', 
    dataType: 'json', 
    url: `/api/session`, 
  })); 
}; 
