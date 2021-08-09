import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import {
  AddPostAC,
  ChangeNewPostTextAC,
} from '../../../../Redux/action-creators/ProfileAC'
import s from './NewPost.module.css'
import { useTypedSelector } from '../../../../hooks/hooks'

export const NewPost: FC = () => {
  const newPostText = useTypedSelector((state) => state.profilePage.newPostText)
  const dispatch = useDispatch()

  const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

  const onChangeText = () => {
    const text = inputRef.current?.value
    dispatch(ChangeNewPostTextAC(String(text)))
  }

  return (
    <div className={s.wrapper}>
      <input
        onChange={onChangeText}
        ref={inputRef}
        type="text"
        value={newPostText}
      />
      <button
        onClick={() => {
          if (newPostText) dispatch(AddPostAC())
        }}
      >
        Post
      </button>
    </div>
  )
}

export default NewPost
