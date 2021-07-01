import React from "react";
import {connect} from "react-redux";
import {CallAC, followAC, OpenDialogAC, setUsersAC} from "../../Redux/friendsReducer";
import Friends from "./Friends";


let mapPropsToState = (state) => {
    return {
        profiles: state.friendsPage.profiles
    }
}

let mapDispatchToState = (dispatch) => {
    return {
        followToggle: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        call: (userId) => {
            dispatch(CallAC(userId))
        },
        message: (userId) => {
            dispatch(OpenDialogAC(userId))
        }
    }
}

let FriendsContainer = connect(mapPropsToState, mapDispatchToState)(Friends)

export default FriendsContainer;