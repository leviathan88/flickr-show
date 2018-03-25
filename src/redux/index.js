import { createStore, applyMiddleware  } from 'redux'
import { reducers } from './reducers'
import { epicMiddleware } from './epics'

export const store = createStore(reducers, applyMiddleware(epicMiddleware))
