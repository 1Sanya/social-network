import React, { FC } from 'react'
import s from './NewPost.module.css'
import { NewPostT } from '../../../../Types/ProfileT'

export const NewPost: FC<NewPostT> = (props: NewPostT) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

  const onAddPost = () => {
    props.createPost()
  }
  const onPostChange = (): void => {
    const text = inputRef.current
    props.changeNewPostText(String(text))
  }
  return (
    <div className={s.wrapper}>
      <input
        onChange={onPostChange}
        ref={inputRef}
        type="text"
        value={props.newPostText}
      />
      <button onClick={onAddPost}>go</button>
    </div>
  )
}

export default NewPost
