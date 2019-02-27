import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store'; 
import Root from './components/root'; 

document.addEventListener('DOMContentLoaded', () => { 
  const mainEl = document.getElementById('main'); 
  const store = configureStore(); 

  ReactDOM.render(<Root store={store} />, mainEl); 
}); 
