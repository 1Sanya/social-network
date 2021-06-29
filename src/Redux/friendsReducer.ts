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
                profiles: state.profiles.map (n => {
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

        default: return state;
    }
}

export const followAC = (userId: number) => ({ type: FOLLOW_TOGGLE, userId: userId })
export const OpenDialogAC = (userId: number) => ({ type: OPED_DIALOG, userId: userId })
export const CallAC = (userId: number) => ({ type: CALL, userId: userId })
export const setUsersAC = (users: number) => ({ type: SET_USERS, users: users})


export default friendsReducer;