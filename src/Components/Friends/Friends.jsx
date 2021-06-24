import React from "react";
import Friends_list from "./Friends_list/Friends_list";
import Friends_search from "./Friends_search/Friends_search";
import Friends_header from "./Friends_header/Friends_header";

import May_be_friends from "./May_be_friends/May_be_friends";
import Peoples_category from "./Peoples_category/Peoples_category";
import * as axios from 'axios'

import s from './Friends.module.css'

let Friends = (props) => {

    if(props.profiles.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }

    return (
        <div className={s.wrapper} >
            <div >
                <Friends_header/>
                <Friends_search/>
                <Friends_list profiles={props.profiles} followToggle={props.followToggle} setUsers={props.setUsers}/>
            </div>
            <div>
                <Peoples_category/>
                <May_be_friends/>
            </div>

        </div>

    )
}

export default Friends;