import React from "react";
import s from './WallPost.module.css'

let WallPost = (props)=> {
    return (
        <div className={s.post}>
            <p>{props.name}</p>
            <p>{props.text}</p>
            <p>{props.likes}</p>
        </div>
    )
}

export default WallPost