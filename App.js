import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { AppContainer } from './AppNavigator'

import store from './src/store'

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>);
  }
}


