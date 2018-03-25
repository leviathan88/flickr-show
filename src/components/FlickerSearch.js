import React from 'react'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base'

const FlickerSearch = () => {
  return (    
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search flicker" />
        <Icon name="ios-camera" />
      </Item>        
    </Header>
  )
}

export default FlickerSearch