import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'

import { ON_SEARCH_PHOTOS_ENTER, ON_INITIAL_PHOTOS_LOADED, ON_LOAD_MORE_PHOTOS, ON_MORE_PHOTOS_LOADED } from '../constants/flicker'
import { getPhotos } from '../../services/photos'

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

function formatResponse(xhr) {
  return JSON.parse('{' + xhr._response.slice(15, -1))
}

function handleResponse({ stat, photos }, type) {  
  return { type: type, payload: stat === 'fail'? [] : photos.photo }
}
