import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import getTheme from './native-base-theme/components'
import { StyleProvider } from 'native-base'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Text style={styles.welcome}>
          Ninjas
        </Text>        
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
