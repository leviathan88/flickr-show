import { ON_SEARCH_PHOTOS_ENTER } from "../constants/flicker"

export function onSearchInputEnter(text) {  
  return {
    type: ON_SEARCH_PHOTOS_ENTER,
    payload: text
  }
}