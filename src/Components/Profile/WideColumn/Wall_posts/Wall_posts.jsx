import React from "react";
import s from './Wall_posts.module.css'
import Wall_post from "./Wall_post/Wall_post";

let Wall_posts = ()=> {
    return (
        <div className={s.posts_wr}>
            <div className={s.item}><Wall_post/></div>
            <div className={s.item}><Wall_post/></div>
        </div>
    )
}

export default Wall_posts