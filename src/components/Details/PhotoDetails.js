import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loader from '../Shared/Loader'

import { clearPhotoDetails } from '../../redux/actions/flicker'
import { getMediumPhoto } from '../../services/photos'

class PhotoDetails extends Component {

  componentWillUnmount() {
    this.props.clearPhotoDetails()
  }

  renderPhotoDetails() {
    const { currentPhoto } = this.props
    const { title, description, comments, owner } = currentPhoto

    return (
      <Container>        
        <Content>
          <Card>
            <CardItem>
              <Left>                
                <Body>
                  <Text>{title._content} by @{owner.username}</Text>                  
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={{uri: getMediumPhoto(currentPhoto)}} style={{height: 500, width: null, flex: 1}}/>
            </CardItem>

            <CardItem>              
              <Body>
                <Button transparent>                  
                  <Text> {comments._content} Comments</Text>
                </Button>
              </Body>              
            </CardItem>

            <CardItem>              
              <Body>
                <Text note>{ description._content }</Text>
              </Body>              
            </CardItem>

          </Card>
        </Content>
      </Container>
    )
  }

  render() {
    return this.props.currentPhoto?
      this.renderPhotoDetails() : <Loader />    
  }
}

const mapStateToProps = ({ Flicker }) => {  
  const { currentPhoto } = Flicker
  return {
    currentPhoto
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ 
    clearPhotoDetails
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetails)
