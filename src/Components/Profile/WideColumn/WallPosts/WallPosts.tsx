import React, { FC } from 'react'
import WallPost from './Wall_post/WallPost'
import s from './WallPosts.module.css'
import { useTypedSelector } from '../../../../hooks/hooks'

const WallPosts: FC = () => {
  const posts = useTypedSelector((state) => state.profilePage.posts)

  return (
    <div className={s.posts_wr}>
      {posts.map((n) => (
        <WallPost key={n.key} name={n.name} text={n.text} likes={n.likes} />
      ))}
    </div>
  )
}

export default WallPosts
