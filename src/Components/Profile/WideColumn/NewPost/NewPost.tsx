import React, { FC } from 'react';
import s from './NewPost.module.css';

type PropsType = {
    createPost: () => void
    changeNewPostText: (text: string) => void
    newPostText: string
}

export const NewPost: FC<PropsType> = (props) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  const onAddPost = () => {
    props.createPost();
  };
  const onPostChange = (): void => {
    // @ts-ignore input is possible null

    const text: string | null = inputRef.current.value;
    props.changeNewPostText(text);
  };
  return (
    <div className={s.new_post_wr}>
      <input onChange={onPostChange} ref={inputRef} type="text" value={props.newPostText} />
      <button onClick={onAddPost}>go</button>
    </div>
  );
};

export default NewPost;
