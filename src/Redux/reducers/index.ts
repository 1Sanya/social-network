import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import friendsReducer from './friendsReducer'
import photosReducer from './photosReducer'
import dialogsReducer from './dialogsReducer'

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  photosPage: photosReducer,
})
