import React from "react";
import './Nav.module.css'
import s from './Nav.module.css'
import NavLi from './navLi/NavLi'
import {CgProfile} from "react-icons/all";


let Nav = ()=> {
    return (
        <div className={s.nav_wr}>

           <div className={s.single_li}> <CgProfile/> <div className={s.li_text}>  Profile</div></div>
            <NavLi text='Messages'/>
            <NavLi text='Friends'/>
            <NavLi text='Photos'/>
        </div>
    )
};

export default Nav


