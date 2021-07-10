import {Dispatch} from "redux";
import {CallACT, FollowToggleACT, FriendsACT, FrinedsAT, OpenDialogACT} from "../../Types/FriendsT";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<FriendsACT>) => {
        try {
            dispatch({type: FrinedsAT.FETCH_USERS})
            const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users')
            dispatch({type: FrinedsAT.FETCH_USERS_SUCCESS, payload: response.data.items})
        } catch (e) {
            dispatch({
                type: FrinedsAT.FETCH_USERS_ERROR,
                payload: 'Ошибка при загрузке пользователей'
            })

        }

    }
}


export const followAC = (userId: number): FollowToggleACT => ({type: FrinedsAT.FOLLOW_TOGGLE, userId: userId})


export const OpenDialogAC = (userId: number): OpenDialogACT => ({type: FrinedsAT.OPED_DIALOG, userId: userId})


export const CallAC = (userId: number): CallACT => ({type: FrinedsAT.CALL, userId: userId})

