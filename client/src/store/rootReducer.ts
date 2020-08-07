import { combineReducers } from 'redux'

import sharingReducer from './sharing/reducer'

const rootReducer = combineReducers({
  sharing: sharingReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
