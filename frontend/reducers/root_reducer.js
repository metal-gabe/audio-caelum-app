/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
// Packages
import { combineReducers } from 'redux';

// Context
// Components
// Assets
// Constants

// Utils / Methods
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import PlayingSongReducer from './playing_song_reducer';
import SessionReducer from './session_reducer';

// Styles

/* -------------------------------------------------------------------------- */
/* START OF ROOT REDUCER TO COMBINE ALL OTHER REDUCERS */
/* -------------------------------------------------------------------------- */
const RootReducer = combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
  ui: PlayingSongReducer,
});

export default RootReducer;
