import { combineReducers } from 'redux'; 
import UsersReducer from './users_reducer'; 
import SongsReducer from './songs_reducer'; 

const EntitiesReducer = combineReducers({ 
  users: UsersReducer, 
  songs: SongsReducer, 
  // albums: AlbumsReducer, // is this needed? (bonus feature) 
  // comments: CommentsReducer, // is this needed? (bonus feature) 
}); 

export default EntitiesReducer; 
