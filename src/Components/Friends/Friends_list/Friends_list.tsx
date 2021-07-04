import React, {FC} from "react";
import s from './Friends_list.module.css'
import {profilesType} from "../../../Types/Friends";
import FriendItem from "./FriendItem/FriendItem";

interface PropsType {
    profiles:  Array<profilesType>,
    followToggle: () => void,
    setUsers: () => void,
    children: React.ReactNode

}


let Friends_list:FC = (props) => {

    // let profiles = props.profiles.map(n => <FriendItem key={n.id} name={n.name} img={n.pic} id={n.id}
    //                                                    isFollow={n.isFollow} followToggle={props.followToggle}/>)

    return (
        <div className={s.wrapper}>
            {/*{profiles}*/}
        </div>
    )
}

export default Friends_list;