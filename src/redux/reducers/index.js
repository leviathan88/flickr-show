import { combineReducers } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { Flicker } from './flicker'

// const epic = combineEpics(

// )

// export const epicMiddleware = createEpicMiddleware(epicMiddleware)

export const reducers = combineReducers({
  Flicker: Flicker
})

