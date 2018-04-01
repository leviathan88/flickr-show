import { ON_SEARCH_PHOTOS_ENTER, ON_LOAD_MORE_PHOTOS } from "../constants/flicker"

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