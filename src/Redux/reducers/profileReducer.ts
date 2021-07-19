import {
  AddPostACT,
  ChangeNewPostTextACT,
  ProfileACT,
  ProfileAT,
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
  newPostText: 'da-da',
}

const profileReducer = (
  state = initialState,
  action: ProfileACT
): ProfileT => {
  switch (action.type) {
    case ProfileAT.ADD_POST: {
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
    case ProfileAT.UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }
    default:
      return state
  }
}

export default profileReducer
