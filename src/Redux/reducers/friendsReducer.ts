import {FriendsACT, FriendsState, FrinedsAT} from "../../Types/FriendsT";

let initialState: FriendsState = {
    profiles: [],
    error: null,
    loading: false

}

const friendsReducer = (state = initialState, action: FriendsACT): FriendsState => {

    switch (action.type) {
        case FrinedsAT.FOLLOW_TOGGLE:
            return {
                ...state,
                profiles: state.profiles.map(n => {
                    if (action.userId === n.id) {
                        return {...n, isFollow: !n.isFollow}
                    }
                    return n;
                })
            }
        case FrinedsAT.OPED_DIALOG:
            return {
                ...state
            }
        case FrinedsAT.CALL:
            return {
                ...state
            }
        case FrinedsAT.FETCH_USERS:
            return {loading: true, error: null, profiles: []}
        case FrinedsAT.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, profiles: action.payload}
        case FrinedsAT.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, profiles: []}
        default:
            return state
    }

}


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