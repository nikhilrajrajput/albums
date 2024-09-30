// redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { albumReducer } from './reducer';

const rootReducer = combineReducers({
  albums: albumReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
