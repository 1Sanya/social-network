import React from "react";
import s from './Friend_item.module.css'
import {BiUserPlus, BsDot, HiOutlineX} from "react-icons/all";


let Friend_item = (props) => {
    return (
        <div className={s.wrapper}>
            <a href= {props.id}><img className={s.ava} src={props.img} alt=""/></a>

            <div className={s.elsePhotoWr}>
                <div className={s.info}>
                    <a className={s.name} href={props.id}>{props.name}</a>
                    <div className={s.contact}>
                        <a className={s.contact_link} href="#">Write message</a>
                        <BsDot className={s.dot} color='#777776' size='0.8em'/>
                        <a className={s.contact_link} href="#">Call</a>
                    </div>

                </div>

                <div className={s.delete_btn}> {props.isFollow ? <HiOutlineX onClick={ () => {props.followToggle(props.id)}} color='#555556' size='1.4em'/>
                                                                : <BiUserPlus onClick={ () => {props.followToggle(props.id)}} color='#555556' size='1.4em'/>}
                </div>

            </div>
        </div>


    )
}

export default Friend_item;