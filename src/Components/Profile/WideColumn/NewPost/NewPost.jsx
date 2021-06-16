import React from "react";
import s from './NewPost.module.css'

let NewPost = (props)=> {
    let inputRef = React.createRef();

    let onAddPost = () => {
        props.createPost();

        console.log("tapped");

    }

    let onPostChange = () => {
        let text = inputRef.current.value;
        props.changeNewPostText(text);

        console.log("changed");

    }
    return (
        <div className={s.new_post_wr}>
            <input onChange={onPostChange} ref={inputRef} type="text" value={props.newPostText}/>
            <button onClick={onAddPost} >go</button>
        </div>
    )
}

export default NewPost