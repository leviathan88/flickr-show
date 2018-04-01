import React, { Component } from 'react'
import { Provider } from 'react-redux'

import RouterComponent from './src/main'
import { store } from './src/redux'

export default class App extends Component {
  render() {
    return (
    <Provider store={store} >
      <RouterComponent />
    </Provider>
    )
  }
}
