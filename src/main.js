import React from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import List from './components/List'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='list' hideNavBar component={List} />
        <Scene key='details' component={List} />
      </Scene>
    </Router>
  )
}

export default RouterComponent