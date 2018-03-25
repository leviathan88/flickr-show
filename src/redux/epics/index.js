import { combineEpics, createEpicMiddleware } from "redux-observable"
import { onPhotoSearchTermEnter } from "./flicker"

const epic = combineEpics(
  onPhotoSearchTermEnter
)

export const epicMiddleware = createEpicMiddleware(epic)
