import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { combineReducers } from 'redux';
import albumReducer from './reducers';

const rootReducer = combineReducers({
  albums: albumReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
