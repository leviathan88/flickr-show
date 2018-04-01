import { combineEpics, createEpicMiddleware } from "redux-observable"
import { onPhotoSearchTermEnter, onLoadMorePhotos, onShowPhotoDetails } from "./flicker"

const epic = combineEpics(
  onPhotoSearchTermEnter,
  onLoadMorePhotos,
  onShowPhotoDetails
)

export const epicMiddleware = createEpicMiddleware(epic)
