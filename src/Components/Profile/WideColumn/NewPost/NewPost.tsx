import React, {FC, Ref} from "react";
import s from './NewPost.module.css'

type PropsType = {
    createPost: () => void
    changeNewPostText: (text:string) => void
    newPostText: string
}



export const NewPost:FC<PropsType> = (props) => {
    let inputRef:React.RefObject<HTMLInputElement> = React.createRef();


    let onAddPost = () => {
        props.createPost();

    }
    let onPostChange = ():void => {
        //TODO ts-ignore: possible null

        // @ts-ignore input is possible null

        let text: string | null = inputRef.current.value;
        props.changeNewPostText(text);

    }
    return (
        <div className={s.new_post_wr}>
            <input onChange={onPostChange} ref={inputRef} type="text" value={props.newPostText}/>
            <button onClick={onAddPost}>go</button>
        </div>
    )
}

export default NewPost