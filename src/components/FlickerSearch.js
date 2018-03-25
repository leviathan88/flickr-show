import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base'

import { onSearchInputEnter } from '../redux/actions/flicker'

const FlickerSearch = ({ onSearchInputEnter }) => {
  return (    
    <Header searchBar rounded>
      <Item>
        <Icon name="search" />
        <Input placeholder="Search flicker" onChangeText={onSearchInputEnter} />
        <Icon name="camera" />
      </Item>        
    </Header>
  )
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ 
    onSearchInputEnter
  }, dispatch)


export default connect(null, mapDispatchToProps)(FlickerSearch)
