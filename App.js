import React from 'react';
import { StyleSheet, View } from 'react-native';
import CreateSet from './src/screens/CreateSet'
import { Provider } from 'react-redux'
import SetScreen from './src/screens/Set'

import store from './src/store'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SetScreen />
          {/* <CreateSet /> */}
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
    paddingTop: 16
  },
});
