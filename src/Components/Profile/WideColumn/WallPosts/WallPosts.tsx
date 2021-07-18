import React, { FC } from 'react'
import WallPost from './Wall_post/WallPost'
import { WallPostsT } from '../../../../Types/ProfileT'
import s from './WallPosts.module.css'

const WallPosts: FC<WallPostsT> = (postsPros) => (
  <div className={s.posts_wr}>
    {postsPros.posts.map((n) => (
      <WallPost key={n.key} name={n.name} text={n.text} likes={n.likes} />
    ))}
  </div>
)

export default WallPosts
