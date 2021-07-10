import React, {FC, useEffect} from "react";
import s from './Friends_list.module.css'
import {FriendsProps} from "../../../Types/FriendsT";
import FriendItem from "./FriendItem/FriendItem";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {fetchUsers} from "../../../Redux/action-creators/friendsAC";


let Friends_list: FC<FriendsProps> = (props) => {

    const {profiles, loading, error} = useTypedSelector(state => state.friendsPage)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={s.wrapper}>
            {profiles.map(n => <FriendItem key={n.id} name={n.name}
                                           img={'https://img.icons8.com/cotton/2x/user-male--v1.png'} id={n.id}
                                           isFollow={n.isFollow} followToggle={props.followToggle}/>)}
        </div>
    )
}

export default Friends_list;

