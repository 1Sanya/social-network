import React from "react";
import s from './WallPosts.module.css'

let WallPosts = (props) => {
    return (
        <div className={s.posts_wr}>
            {props.posts}
        </div>
    )
}

export default WallPosts