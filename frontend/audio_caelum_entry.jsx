import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store'; 
import Root from './components/root'; 
import { signupAC, loginAC, logoutAC } from './actions/session_actions'; 

document.addEventListener('DOMContentLoaded', () => { 
  const mainEl = document.getElementById('main'); 
  const store = configureStore(); 

  // TESTING START 
    window.signup = signupAC; 
    window.login = loginAC; 
    window.logout = logoutAC; 
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
  // TESTING END 

  ReactDOM.render(<Root store={store} />, mainEl); 
}); 
