import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import loginReducer from './src/state/reducer';

const store = createStore(loginReducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
