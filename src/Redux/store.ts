import {createStore} from "redux";
import { rootReducer } from "./reducers";

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


let store = createStore(rootReducer)

export default store