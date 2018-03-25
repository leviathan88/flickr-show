import React from 'react'
import { List, ListItem, Thumbnail, Text, Body, Right } from 'native-base'
import { connect } from 'react-redux'
import { getSmallPhoto } from '../services/photos'

const FlickerList = ({ photos }) => {
  return (    
    <List dataArray={photos} renderRow={(photo, _, index) => {
      // check if index of renderedPhoto is above 1/2 of complete length then get the next 10 :D
      console.log(index)
      return (
        <ListItem key={photo.id}>
          <Thumbnail square size={80} source={{ uri: getSmallPhoto(photo) }} />
          <Body>
            <Text> { photo.title } </Text>
          </Body>
          <Right>
            <Text note>{ Number(index) + 1 } / { photos.length }</Text>
          </Right>
        </ListItem>
        )}
      }
    />    
  )
}

const mapStateToProps = ({ Flicker }) => {  
  const { photos } = Flicker
  return {
    photos
  }
}

export default connect(mapStateToProps)(FlickerList)