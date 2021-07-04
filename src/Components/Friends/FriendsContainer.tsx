import React, {Dispatch, FC} from "react"
import {connect} from "react-redux"
import {CallAC, followAC, OpenDialogAC, setUsersAC} from "../../Redux/reducers/friendsReducer"
import {AppStateType} from "../../Redux/store"
import {FriendsAction} from "../../Types/Friends";
import Friends from "./Friends";


let mapPropsToState = (state: AppStateType) => {
    return {
        profiles: state.friendsPage.profiles
    }
}

let mapDispatchToState = (dispatch: Dispatch<FriendsAction>) => {
    return {
        followToggle: (userId:number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users))
        },
        call: (userId:number) => {
            dispatch(CallAC(userId))
        },
        message: (userId:number) => {
            dispatch(OpenDialogAC(userId))
        }
    }
}


let FriendsContainer = connect(mapPropsToState, mapDispatchToState)(Friends)
export default FriendsContainer
