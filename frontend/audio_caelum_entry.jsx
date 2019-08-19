import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {
//   requestAllSongsAC,
//   requestSongAC,
// } from './actions/song_actions';

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
