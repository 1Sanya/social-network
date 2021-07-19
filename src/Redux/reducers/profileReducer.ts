import {
  addPostAction,
  ChangeNewPostTextAction,
  ProfileAction,
  ProfileActionTypes,
  ProfileT,
} from '../../Types/ProfileT'

const initialState: ProfileT = {
  posts: [
    {
      key: 1,
      name: 'Sanya',
      text: 'Bilo ne slojno, eto po lubvi',
      likes: 3,
    },
    {
      key: 2,
      name: 'Danya',
      text: 'Na football go?',
      likes: 0,
    },
  ],
  newPostText: 'snus',
}

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileT => {
  switch (action.type) {
    case ProfileActionTypes.ADD_POST: {
      return {
        ...state,
        posts: [
          {
            key: 3,
            name: 'Sanya',
            text: state.newPostText,
            likes: 0,
          },
          ...state.posts,
        ],
        newPostText: '',
      }
    }
    case ProfileActionTypes.UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }
    default:
      return state
  }
}

export const addPostAC = (): addPostAction => ({
  type: ProfileActionTypes.ADD_POST,
})

export const newPostTextAC = (newText: string): ChangeNewPostTextAction => ({
  type: ProfileActionTypes.UPDATE_NEW_POST_TEXT,
  newText,
})

export default profileReducer
