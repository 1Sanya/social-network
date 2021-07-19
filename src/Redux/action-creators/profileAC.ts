import {
  AddPostACT,
  ChangeNewPostTextACT,
  ProfileAT,
} from '../../Types/ProfileT'

export const AddPostAC = (): AddPostACT => ({
  type: ProfileAT.ADD_POST,
})

export const ChangeNewPostTextAC = (newText: string): ChangeNewPostTextACT => ({
  type: ProfileAT.UPDATE_NEW_POST_TEXT,
  newText,
})
