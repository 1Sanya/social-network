import { FriendsACT, FriendsAT, FriendsState } from '../../Types/FriendsT'

const initialState: FriendsState = {
  pageArray: [],
  profiles: [],
  error: null,
  loading: false,
  totalUserCount: 60,
  pageSize: 10,
  currentPage: 2,
}

const friendsReducer = (
  state = initialState,
  action: FriendsACT
): FriendsState => {
  switch (action.type) {
    case FriendsAT.FOLLOW_TOGGLE:
      return {
        ...state,
        profiles: state.profiles.map((n) => {
          if (action.userId === n.id) {
            return {
              ...n,
              isFollow: !n.isFollow,
            }
          }
          return n
        }),
      }
    case FriendsAT.OPED_DIALOG:
      return {
        ...state,
      }
    case FriendsAT.CALL:
      return {
        ...state,
      }
    case FriendsAT.FETCH_USERS:
      return {
        ...state,
        loading: true,
        error: null,
        profiles: [],
      }
    case FriendsAT.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profiles: action.payload,
      }
    case FriendsAT.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        profiles: [],
      }
    default:
      return state
  }
}

export default friendsReducer
