import React from "react";
import './Profile.module.css'
import s from './Profile.module.css'
import Gifts from "./NarrowColumn/Gifts/Gifts";
import Friends from "./NarrowColumn/Friends/Friends";
import Comms from "./NarrowColumn/Communities/Comms";
import Videos from "./NarrowColumn/Videos/Videos";
import Music from "./NarrowColumn/Music/Music";
import Ava from "./NarrowColumn/Ava/Ava";
import Discr from "./WideColumn/Discr/Discr";
import PhotoWr from "./WideColumn/PhotoWr/PhotoWr";
import DiscrLinks from "./WideColumn/DiscrLinks/DiscrLinks";
import NewPost from "./WideColumn/NewPost/NewPost";
import Posts from "./WideColumn/Posts/Posts";

let Profile = () => {
    return (

            <div className={s.columns}>

                <div className={s.narrow_column}>
                    <Ava/>
                    <Gifts/>
                    <Friends/>
                    <Comms/>
                    <Videos/>
                    <Music/>
                </div>

                <div className={s.wide_column}>
                    <Discr/>
                    <DiscrLinks/>
                    <PhotoWr/>
                    <NewPost/>
                    <Posts/>
                </div>

            </div>
    )
}

export default Profile