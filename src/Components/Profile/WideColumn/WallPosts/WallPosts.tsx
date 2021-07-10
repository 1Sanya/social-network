import React, {FC} from "react";
import WallPost from "./Wall_post/WallPost";
import {WallPostsT} from "../../../../Types/ProfileT";
import s from './WallPosts.module.css'

let WallPosts: FC<WallPostsT> = (postsPros) => {

    return (
        <div className={s.posts_wr}>
            {postsPros.posts.map(n => <WallPost name={n.name} text={n.text} likes={n.likes}/>)}
        </div>
    )
}

export default WallPosts