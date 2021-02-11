/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './src/routes';
import {Provider} from 'react-redux';
import {getStore, getPersistor} from './src/redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  const myStore = getStore();
  const myPersistor = getPersistor();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={myStore}>
        <PersistGate persistor={myPersistor} loading={null}>
          <Navigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
