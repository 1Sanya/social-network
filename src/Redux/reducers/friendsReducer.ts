import {
    CallAction,
    FollowToggleAction,
    FriendsAction,
    FrinedsActionTypes,
    FrinedsState,
    OpenDialogAction, SetUsersAction
} from "../../Types/Friends";

let initialState: FrinedsState = {
    profiles: []
}

const friendsReducer = (state = initialState, action: FriendsAction ): FrinedsState => {

    switch (action.type) {
        case FrinedsActionTypes.FOLLOW_TOGGLE:
            return {
                ...state,
                profiles: state.profiles.map(n => {
                    if (action.userId === n.id) {
                        return {...n, isFollow: !n.isFollow}
                    }
                    return n;
                })
            }
        case FrinedsActionTypes.SET_USERS: {
            return {
                ...state, profiles: action.users
            }
        }
        case FrinedsActionTypes.OPED_DIALOG:
            return {
                ...state
            }
        case FrinedsActionTypes.CALL:
            return {
                ...state
            }

        default:
            return state
    }

}




export const followAC = (userId: number):FollowToggleAction => ({type: FrinedsActionTypes.FOLLOW_TOGGLE, userId: userId})


export const OpenDialogAC = (userId: number):OpenDialogAction => ({type: FrinedsActionTypes.OPED_DIALOG, userId: userId})


export const CallAC = (userId: number):CallAction => ({type: FrinedsActionTypes.CALL, userId: userId})


export const setUsersAC = (users: any):SetUsersAction => ({type: FrinedsActionTypes.SET_USERS, users: users})





export default friendsReducer














































// import {AnyAction} from "redux"
//
//
//
//
//
//
//
//
//
//
// type profilesType = {
//     name: string, id: number
// }
//
// type stateType = {
//     profiles:  Array<profilesType>
// }
//
// let initialState: stateType = {
//     profiles: [
//         {name: 'string', id: 3}
//     ]
// }
//
//
//
//
//
//
//
//
// const friendsReducer = (state = initialState, action: AnyAction) => {
//
//     switch (action.type) {
//         // case FOLLOW_TOGGLE:
//         //     return {
//         //         ...state,
//         //         profiles: state.profiles.map(n => {
//         //             if (action.userId === n.id) {
//         //                 return {...n, isFollow: !n.isFollow}
//         //             }
//         //             return n;
//         //         })
//         //     }
//         // case SET_USERS: {
//         //     return {
//         //         ...state, profiles: action.users
//         //     }
//         // }
//         case OPED_DIALOG:
//             return {
//                 state
//             }
//         case CALL:
//             return {
//                 state
//             }
//
//         default:
//             return state;
//     }
// }
//
// type followAT = {
//     type: typeof FOLLOW_TOGGLE,
//     userId: number
// }
// export const followAC = (userId: number):followAT => ({type: FOLLOW_TOGGLE, userId: userId})
//
// type OpenDialogAT = {
//     type: typeof OPED_DIALOG,
//     userId:number
// }
// export const OpenDialogAC = (userId: number):OpenDialogAT => ({type: OPED_DIALOG, userId: userId})
//
// type CallAT = {
//     type: typeof OPED_DIALOG,
//     userId: number
// }
// export const CallAC = (userId: number):CallAT => ({type: CALL, userId: userId})
//
// type setUsersAT = {
//     type: typeof SET_USERS,
//     users: any
// }
// export const setUsersAC = (users: any):setUsersAT => ({type: SET_USERS, users: users})
//
//
// export default friendsReducer;