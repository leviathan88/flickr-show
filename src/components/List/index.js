import React from 'react'
import { Container } from 'native-base'

import FlickerHeader from './FlickerHeader'
import FlickerSearch from './FlickerSearch'
import FlickerList from './FlickerList'

const List = () =>
  <Container>
    <FlickerHeader />
    <FlickerSearch />
    <Container>      
      <FlickerList />
    </Container>
  </Container>

export default List