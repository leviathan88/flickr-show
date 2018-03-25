import React from 'react'
import { Container, Content } from 'native-base'
import FlickerHeader from './components/FlickerHeader'
import FlickerSearch from './components/FlickerSearch'
import FlickerList from './components/FlickerList'

const MainComponent = () =>
  <Container>
    <FlickerHeader />
    <Content>
      <FlickerSearch />
      <FlickerList />
    </Content>
  </Container>

export default MainComponent