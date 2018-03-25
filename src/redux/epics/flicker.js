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

import { ON_SEARCH_PHOTOS_ENTER, ON_INITIAL_PHOTOS_LOADED } from '../constants/flicker'

export function onPhotoSearchTermEnter(action$) {
  return action$.ofType(ON_SEARCH_PHOTOS_ENTER)
    .debounceTime(400)
    .switchMap(({ payload }) => 
      ajax.get(getPhotos(payload, 1))
        .do(_ => console.log(_))
        .map(({xhr}) =>JSON.parse('{' + xhr._response.slice(15, -1)))
        .do(_ => console.log(_))
        .map((res) => ({ type: ON_INITIAL_PHOTOS_LOADED, payload: res }))        
  )
}

function getPhotos(text, page) {
  return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ad24bb1f7a2c63b760462b485f9bb9f0&format=json&per_page=25&text=${text}&page=${page}`
}