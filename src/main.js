import React from 'react'
import { Container, Content, View } from 'native-base'
import FlickerHeader from './components/FlickerHeader'
import FlickerSearch from './components/FlickerSearch'
import FlickerList from './components/FlickerList'

const MainComponent = () =>
  <Container>
    <FlickerHeader />
    <FlickerSearch />
    <Container>      
      <FlickerList />
    </Container>
  </Container>

export default MainComponent