/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
import React from 'react';
import ReactDOM from 'react-dom';

// Packages
// Context

// Components
import Root from './components/root';

// Assets
// Constants

// Utils / Methods
// import {
//   requestAllSongsAC,
//   requestSongAC,
// } from './actions/song_actions';
import configureStore from './store/store';

// Styles

/* -------------------------------------------------------------------------- */
/* START OF MAIN ENTRY LOGIC */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const mainEl = document.getElementById('main');
  let store;

  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;

    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser,
        },
      },
      session: { id },
    };

    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, mainEl);
});
