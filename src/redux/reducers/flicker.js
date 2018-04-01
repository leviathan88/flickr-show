import { returnNewState } from "../helpers"
import { 
  ON_SEARCH_PHOTOS_ENTER, 
  ON_INITIAL_PHOTOS_LOADED, 
  ON_MORE_PHOTOS_LOADED, 
  ON_LOAD_MORE_PHOTOS, 
  ON_PHOTO_DEATILS_LOADED,
  ON_CLEAR_PHOTO_DETAILS 
} from "../constants/flicker"

export function Flicker(state = initialState, { type, payload }) {
  switch (type) {

    case ON_SEARCH_PHOTOS_ENTER:
      return returnNewState(state, { searchTerms: payload, isLoading: true })

    case ON_INITIAL_PHOTOS_LOADED:
      return returnNewState(state, { photos: payload, currentPage: 1, isLoading: false })

    case ON_LOAD_MORE_PHOTOS:
      return returnNewState(state, { isLoading: true })

    case ON_MORE_PHOTOS_LOADED:
      return returnNewState(state, { 
        photos: [...state.photos, ...payload], 
        currentPage: state.currentPage + 1, 
        isLoading: false 
      })

    case ON_PHOTO_DEATILS_LOADED:      
      return returnNewState(state, { currentPhoto: payload })

    case ON_CLEAR_PHOTO_DETAILS:
      return returnNewState(state, { currentPhoto: null })
  
    default:
      return state
  }
}

const initialState = {
  photos: [],
  searchTerms: '',
  currentPage: 1,
  isLoading: false,
  currentPhoto: null
}
