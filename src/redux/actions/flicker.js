import { Actions } from 'react-native-router-flux'

import { 
  ON_SEARCH_PHOTOS_ENTER, 
  ON_LOAD_MORE_PHOTOS, 
  ON_SHOW_PHOTO_DETAILS,
  ON_CLEAR_PHOTO_DETAILS
} from "../constants/flicker"

export function onSearchInputEnter(text) {  
  return {
    type: ON_SEARCH_PHOTOS_ENTER,
    payload: text
  }
}

export function loadMorePhotos() {
  return {
    type: ON_LOAD_MORE_PHOTOS
  }
}

export function showPhotoDetails(id) {
  Actions.details()
  return {
    type: ON_SHOW_PHOTO_DETAILS,
    payload: id
  }
}

export function clearPhotoDetails() {
  return {
    type: ON_CLEAR_PHOTO_DETAILS
  }
}
