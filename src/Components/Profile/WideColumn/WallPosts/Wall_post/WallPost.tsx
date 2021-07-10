import React, {FC} from "react";

import s from './WallPost.module.css'
import {WallSinglePostsT} from "../../../../../Types/ProfileT";

let WallPost: FC<WallSinglePostsT> = (props) => {

    return (


        <div className={s.post}>
            <p>{props.name}</p>
            <p>{props.text}</p>
            <p>{props.likes}</p>
        </div>
    )
}

export default WallPost