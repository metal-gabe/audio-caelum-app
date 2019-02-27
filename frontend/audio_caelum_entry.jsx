import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store'; 
import Root from './components/root'; 
import { signup, login, logout } from './actions/session_actions'; 

document.addEventListener('DOMContentLoaded', () => { 
  const mainEl = document.getElementById('main'); 
  const store = configureStore(); 

  // TESTING START 
    window.signup = signup; 
    window.login = login; 
    window.logout = logout; 
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
  // TESTING END 

  ReactDOM.render(<Root store={store} />, mainEl); 
}); 
