import React from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import List from './components/List'
import PhotoDetails from './components/Details/PhotoDetails'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='list' hideNavBar component={List} />
        <Scene key='details' component={PhotoDetails} />
      </Scene>
    </Router>
  )
}

export default RouterComponent