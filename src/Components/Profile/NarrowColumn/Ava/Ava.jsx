import React from "react";
import s from './Ava.module.css'

let Ava = (props)=> {
    return (
        <div>
            <img src={`${props.link}`} alt=""/>
        </div>
    )
}

export default Ava