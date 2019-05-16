import React from 'react';
import { StyleSheet, View } from 'react-native';
import CreateSet from './src/screens/CreateSet'
import { Provider } from 'react-redux'

import store from './src/store'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CreateSet />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 16,
    paddingTop: 16
  },
});
