import { createStore, combineReducers } from 'redux';
import { fileDirectory, fileContent } from './reducers';

export default createStore(combineReducers({ fileDirectory, fileContent }))