import { Dispatch } from 'redux'
import {
  CallACT,
  FollowToggleACT,
  FriendsACT,
  FriendsAT,
  OpenDialogACT,
} from '../../Types/FriendsT'
import { instance } from '../../async/api'

export const fetchUsers = () => async (dispatch: Dispatch<FriendsACT>) => {
  try {
    dispatch({ type: FriendsAT.FETCH_USERS })
    const response = await instance.get(
      'https://social-network.samuraijs.com/api/1.0/users'
    )
    dispatch({
      type: FriendsAT.FETCH_USERS_SUCCESS,
      payload: response.data.items,
    })
  } catch (e) {
    dispatch({
      type: FriendsAT.FETCH_USERS_ERROR,
      payload: 'Ошибка при загрузке пользователей',
    })
  }
}

export const followAC = (userId: number): FollowToggleACT => ({
  type: FriendsAT.FOLLOW_TOGGLE,
  userId,
})

export const OpenDialogAC = (userId: number): OpenDialogACT => ({
  type: FriendsAT.OPED_DIALOG,
  userId,
})

export const CallAC = (userId: number): CallACT => ({
  type: FriendsAT.CALL,
  userId,
})
