import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  addPostAC,
  newPostTextAC,
} from '../../../../Redux/reducers/profileReducer'
import NewPost from './NewPost'
import { AppStateType } from '../../../../Redux/store'
import { ProfileAction } from '../../../../Types/ProfileT'

const mapStateToProps = (state: AppStateType) => ({
  newPostText: state.profilePage.newPostText,
})
const mapDispatchToProps = (dispatch: Dispatch<ProfileAction>) => ({
  createPost: () => {
    dispatch(addPostAC())
  },
  changeNewPostText: (newText: string) => {
    const action = newPostTextAC(newText)
    dispatch(action)
  },
})

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer
