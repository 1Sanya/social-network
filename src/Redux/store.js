import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    friendsPage: friendsReducer
});

let store = createStore(reducers);

export default store;