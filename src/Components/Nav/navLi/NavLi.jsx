import React from "react";
import './NavLi.module.css'
import s from './NavLi.module.css'
import {CgProfile} from 'react-icons/all'


let NavLi = (props) => {
    return(
        <div>
            {props.text}
        </div>
    )
}

export default NavLi