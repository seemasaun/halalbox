//Configure store

import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, {}, applyMiddleware(thunk, logger));
const persistor = persistStore(store);
const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
  return store.getState();
};
export {getStore, getState, getPersistor};
