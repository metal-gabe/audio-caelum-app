/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
// Packages
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

// Context
// Components
// Assets
// Constants

// Utils / Methods
import RootReducer from '../reducers/root_reducer';

// Styles

/* -------------------------------------------------------------------------- */
/* START OF STORE CONFIGURATION */
/* -------------------------------------------------------------------------- */
const configureStore = (preloadedState = {}) =>
  process.env.NODE_ENV === 'production'
    ? createStore(RootReducer, preloadedState, applyMiddleware(thunk))
    : createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;
