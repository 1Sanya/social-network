import React from "react";
import s from './Profile_ava.module.css'

let Profile_ava = (props)=> {
    return (
        <div className={s.img}>
            <img src={`${props.link}`} alt=""/>
        </div>
    )
}

export default Profile_ava