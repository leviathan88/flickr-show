import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'

import { ON_SEARCH_PHOTOS_ENTER, 
  ON_INITIAL_PHOTOS_LOADED, ON_LOAD_MORE_PHOTOS, 
  ON_MORE_PHOTOS_LOADED, ON_SHOW_PHOTO_DETAILS, 
  ON_PHOTO_DEATILS_LOADED } from '../constants/flicker'
import { getPhotos, getPhotoInfo } from '../../services/photos'

export function onPhotoSearchTermEnter(action$) {
  return action$.ofType(ON_SEARCH_PHOTOS_ENTER)
    .debounceTime(200)
    .switchMap(({ payload }) => 
      ajax.get(getPhotos(payload, 1))
        .do(_ => console.log(_))
        .map(({xhr}) => formatResponse(xhr))
        .do(_ => console.log(_))
        .map((res) => handleResponse(res, ON_INITIAL_PHOTOS_LOADED))
  )
}

export function onLoadMorePhotos(action$, store) {
  return action$.ofType(ON_LOAD_MORE_PHOTOS)
    .switchMap(_ => 
      ajax.get(getPhotos(store.getState().Flicker.searchTerms, store.getState().Flicker.currentPage + 1))
        .do(_ => console.log(_))
        .map(({xhr}) =>formatResponse(xhr))
        .do(_ => console.log(_))
        .map((res) => handleResponse(res, ON_MORE_PHOTOS_LOADED))
    )
}

export function onShowPhotoDetails(action$) {
  return action$.ofType(ON_SHOW_PHOTO_DETAILS)
    .switchMap(({ payload }) =>
      ajax.get(getPhotoInfo(payload))
        .do(_ => console.log(_))
        .map(({xhr}) =>formatResponse(xhr))
        .do(_ => console.log(_))
        .map((res) => ({ type: ON_PHOTO_DEATILS_LOADED, payload: res.photo }))

    )
}

// for some reason Flickr API returned empty response data, so I had to get it from res.xhr._response
function formatResponse(xhr) {
  return JSON.parse('{' + xhr._response.slice(15, -1))
}

function handleResponse({ stat, photos }, type) {  
  return { type: type, payload: stat === 'fail'? [] : photos.photo }
}
