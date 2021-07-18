import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
