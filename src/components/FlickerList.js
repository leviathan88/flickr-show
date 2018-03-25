import React from 'react'
import { List, ListItem, Thumbnail, Text, Body } from 'native-base'
import { connect } from 'react-redux'
import { getSmallPhoto } from '../services/photos';

const FlickerList = ({ photos }) => {
  return (    
    <List>
      {
        photos.map(photo => (
          <ListItem key={photo.id}>
            <Thumbnail square size={80} source={{ uri: getSmallPhoto(photo) }} />
            <Body>
              <Text note> { photo.title } </Text>
            </Body>
          </ListItem>        
        ))
      }      
    </List>
  )
}

const mapStateToProps = ({ Flicker }) => {  
  const { photos } = Flicker
  return {
    photos
  }
}

export default connect(mapStateToProps)(FlickerList)