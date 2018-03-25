import React from 'react'
import { Container, Content } from 'native-base'
import FlickerHeader from './components/FlickerHeader'
import FlickerSearch from './components/FlickerSearch'

const MainComponent = () =>
  <Container>
    <FlickerHeader />
    <Content>
      <FlickerSearch />
    </Content>
  </Container>

export default MainComponent