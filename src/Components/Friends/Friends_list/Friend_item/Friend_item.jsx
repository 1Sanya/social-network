import React from "react";
import s from './Friend_item.module.css'

let Friend_item = (props) => {
    return (
        <div className={s.wrapper}>
            <a href= {props.id}><img className={s.ava} src={props.img} alt=""/></a>

            <div className={s.info}>
                <a className={s.name} href={props.id}>{props.name}</a>
                <div className={s.contact}>
                    <a className={s.contact_link} href="#">Write message</a>
                    <a className={s.contact_link} href="#">Call</a>
                </div>

            </div>
        </div>


    )
}

export default Friend_item;