import React from "react";
import s from './Profile.module.css'
import Gifts from "./NarrowColumn/Gifts/Gifts";
import Friends from "./NarrowColumn/Friends/Friends";

import Ava from "./NarrowColumn/Ava/Ava";
import Discr from "./WideColumn/Discr/Discr";
import Photos from "./WideColumn/Photos/Photos";
import DiscrLinks from "./WideColumn/DiscrLinks/DiscrLinks";
import NewPost from "./WideColumn/NewPost/NewPost";
import Wall_posts from "./WideColumn/Wall_posts/Wall_posts";
import ComVideMusic from "./NarrowColumn/ComVideMusic/ComVideMusic";

let Profile = () => {
    console.log(s.page_block)
    return (

        <div className={s.columns}>
            <div className={s.narrow_column}>
                <div className={s.page_block}> <Ava link='https://sun2-3.userapi.com/s/v1/ig2/qM7zDX1v2vdlh0h3QF_9llzCPdn4dwrmHsgWVAyq3tZ5aQlAXceNLBCSNTa-rIXYU-nJOvIfJldniMXVjvdLCdmB.jpg?size=200x0&quality=96&crop=0,0,1620,2160&ava=1'/></div>
                <div className={s.page_block}> <Gifts/></div>
                <div className={s.page_block}> <Friends /></div>
                <div className={s.page_block}><ComVideMusic/></div>
            </div>

            <div className={s.wide_column}>
                <div className={s.page_block}> <Discr/></div>
                <div className={s.page_block}> <DiscrLinks/></div>
                <div className={s.page_block}> <Photos/></div>
                <div className={s.page_block}> <NewPost/></div>
                <Wall_posts/>
            </div>

        </div>
    )
}

export default Profile