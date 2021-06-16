import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer
});

let store = createStore(reducers);

export default store;