import React from 'react';
import { StyleSheet, View } from 'react-native';
import CreateSet from './src/screens/CreateSet'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CreateSet />
      </View>
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
