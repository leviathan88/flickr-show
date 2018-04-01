import React from 'react'
import { List, ListItem, Thumbnail, Text, Body, Right, View } from 'native-base'
import { FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSmallPhoto } from '../services/photos'
import { loadMorePhotos } from '../redux/actions/flicker'

const FlickerList = ({ photos, loadMorePhotos, isLoading }) => {
  renderFooter = () => {
    if (!isLoading) return null

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  return (    
    <List>
      <FlatList
        data={photos}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <ListItem key={item.id}>
            <Thumbnail square size={80} source={{ uri: getSmallPhoto(item) }} />
            <Body>
              <Text> { item.title } </Text>
            </Body>
            <Right>
              <Text note>{ Number(index) + 1 } / { photos.length }</Text>
            </Right>
          </ListItem>
        )}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={400}
        
        onEndReached={({ distanceFromEnd }) => {
          console.log('IM at the end and dyong')
          console.log(distanceFromEnd)
          // loadMorePhotos()
        }}
      />
    </List>
  )
}

const mapStateToProps = ({ Flicker }) => {  
  const { photos, isLoading } = Flicker  
  return {
    photos,
    isLoading
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ 
    loadMorePhotos
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FlickerList)
