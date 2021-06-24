let FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
let OPED_DIALOG = 'OPEN-DIALOG';
let CALL = 'CALL';
let SET_USERS = 'SET_USERS';


let initialState = {
    profiles: []
}


let friendsReducer = (state = initialState, action) => {

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

export const followAC = (userId) => ({ type: FOLLOW_TOGGLE, userId: userId })
export const OpenDialogAC = (userId) => ({ type: OPED_DIALOG, userId: userId })
export const CallAC = (userId) => ({ type: CALL, userId: userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users: users})


export default friendsReducer;