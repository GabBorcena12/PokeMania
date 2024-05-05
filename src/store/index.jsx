import { legacy_createStore as createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
