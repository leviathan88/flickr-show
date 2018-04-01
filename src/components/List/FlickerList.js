import React from 'react'
import { List, ListItem, Thumbnail, Text, Body, Right, View } from 'native-base'
import { FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSmallPhoto } from '../../services/photos'
import { loadMorePhotos, showPhotoDetails } from '../../redux/actions/flicker'
import Loader from '../Shared/Loader';

const FlickerList = ({ photos, loadMorePhotos, isLoading, showPhotoDetails }) => {
  renderFooter = () => {
    return !isLoading ? null : <Loader />
  }

  return (    
    <List>
      <FlatList
        data={photos}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <ListItem onPress={() => showPhotoDetails(item.id)}>
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
        onEndReachedThreshold={0.01}
        onEndReached={loadMorePhotos}
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
    loadMorePhotos,
    showPhotoDetails
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FlickerList)
