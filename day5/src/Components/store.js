// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers for other parts of your application here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
