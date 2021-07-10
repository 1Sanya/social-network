import React, {Dispatch} from "react"
import {connect} from "react-redux"
import {AppStateType} from "../../Redux/store"
import {FriendsACT} from "../../Types/FriendsT";
import Friends from "./Friends";
import {CallAC, followAC, OpenDialogAC} from "../../Redux/action-creators/friendsAC";


let mapPropsToState = (state: AppStateType) => ({
    profiles: state.friendsPage.profiles

})

let mapDispatchToState = (dispatch: Dispatch<FriendsACT>) => {

    return {
        followToggle: (userId: number) => {
            dispatch(followAC(userId))
        },
        call: (userId: number) => {
            dispatch(CallAC(userId))
        },
        message: (userId: number) => {
            dispatch(OpenDialogAC(userId))
        }
    }
}

let FriendsContainer = connect(mapPropsToState, mapDispatchToState)(Friends)

export default FriendsContainer
