import { createStore, applyMiddleware } from 'redux'; 
import { logger } from 'redux-logger'; 
import thunk from 'redux-thunk'; 
import RootReducer from '../reducers/root_reducer'; 

const configureStore = (preloadedState={}) => 
  process.env.NODE_ENV === 'production' 
    ? createStore(RootReducer, preloadedState, applyMiddleware(thunk)) 
    : createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger)); 

export default configureStore; 
