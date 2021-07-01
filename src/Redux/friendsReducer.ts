import {AnyAction} from "redux";

let FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
let OPED_DIALOG = 'OPEN-DIALOG';
let CALL = 'CALL';
let SET_USERS = 'SET_USERS';

type profilesType = {
    name: string | null,
    id: number | null,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
    },
    status: null,
    isFollow: false | null
}

type stateType = {
    profiles: Array<profilesType>
}

let initialState: stateType = {
    profiles: []
}

let friendsReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state,
                profiles: state.profiles.map(n => {
                    if (action.userId === n.id) {
                        return {...n, isFollow: !n.isFollow}
                    }
                    return n;
                })
            }
        case SET_USERS: {
            return {
                ...state, profiles: action.users
            }
        }
        case OPED_DIALOG:
            return {
                state
            }
        case CALL:
            return {
                state
            }

        default:
            return state;
    }
}
type followAT = {
    type: typeof FOLLOW_TOGGLE,
    userId: number
}
export const followAC = (userId: number):followAT => ({type: FOLLOW_TOGGLE, userId: userId})

type OpenDialogAT = {
    type: typeof OPED_DIALOG,
    userId:number
}
export const OpenDialogAC = (userId: number):OpenDialogAT => ({type: OPED_DIALOG, userId: userId})

type CallAT = {
    type: typeof OPED_DIALOG,
    userId: number
}
export const CallAC = (userId: number):CallAT => ({type: CALL, userId: userId})

type setUsersAT = {
    type: typeof SET_USERS,
    users: Array<profilesType>
}
export const setUsersAC = (users: number):setUsersAT => ({type: SET_USERS, users: users})


export default friendsReducer;