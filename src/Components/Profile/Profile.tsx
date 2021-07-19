import React from 'react'
import s from './Profile.module.css'
import Gifts from './NarrowColumn/Profile_gifts/Profile_gifts'
import Profile_friends from './NarrowColumn/Profile_friends/Profile_friends'

import Profile_ava from './NarrowColumn/Profile_ava/Profile_ava'
import Profile_info from './WideColumn/Profile_info/Profile_info'
import Profile_photos from './WideColumn/Profile_photos/Profile_photos'
import Profile_links from './WideColumn/Profile_links/Profile_links'
import ComVideMusic from './NarrowColumn/ComVideMusic/ComVideMusic'
import WallPosts from './WideColumn/WallPosts/WallPosts'
import NewPost from './WideColumn/NewPost/NewPost'

const Profile = () => (
  <div className={s.columns}>
    <div className={s.narrow_column}>
      <div className={s.page_block}>
        <Profile_ava />
      </div>
      <div className={s.page_block}>
        <Gifts />
      </div>
      <div className={s.page_block}>
        <Profile_friends />
      </div>
      <div className={s.page_block}>
        <ComVideMusic />
      </div>
    </div>

    <div className={s.wide_column}>
      <div className={s.page_block}>
        <Profile_info />
      </div>
      <div className={s.page_block}>
        <Profile_links />
      </div>
      <div className={s.page_block}>
        <Profile_photos />
      </div>
      <div className={s.page_block}>
        <NewPost />
      </div>
      <WallPosts />
    </div>
  </div>
)

export default Profile
