import { combineEpics, createEpicMiddleware } from "redux-observable"
import { onPhotoSearchTermEnter, onLoadMorePhotos } from "./flicker"

const epic = combineEpics(
  onPhotoSearchTermEnter,
  onLoadMorePhotos
)

export const epicMiddleware = createEpicMiddleware(epic)
