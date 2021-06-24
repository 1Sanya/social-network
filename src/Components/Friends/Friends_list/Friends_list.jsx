import React from "react";
import s from './Friends_list.module.css'
import Friend_item from "./Friend_item/Friend_item";

let Friends_list = (props) => {

    let profiles = props.profiles.map(n => <Friend_item key={n.id} name={n.name} img={n.pic} id={n.id} isFollow={n.isFollow} followToggle={props.followToggle}/>)

    return (
        <div className={s.wrapper}>
            {profiles}
        </div>
    )
}

export default Friends_list;