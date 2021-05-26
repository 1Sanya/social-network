import React from "react";
import s from './Nav.module.css'
import NavLi from './navLi/NavLi'
import {CgProfile} from 'react-icons/cg';
import {FiMessageCircle} from 'react-icons/fi'
import {IoPeopleOutline} from 'react-icons/all'
import {HiOutlinePhotograph} from 'react-icons/all'


let Nav = ()=> {
    return (
        <div className={s.nav_wr}>

           <div className={s.single_li}> <CgProfile color='#586069' size='1.2em'/> <div className={s.li_text}>My profile</div></div>
           <div className={s.single_li}> <FiMessageCircle color='#586069' size='1.2em'/> <div className={s.li_text}>Messenger</div></div>
           <div className={s.single_li}> <IoPeopleOutline color='#586069' size='1.2em'/> <div className={s.li_text}>Friends</div></div>
           <div className={s.single_li}> <HiOutlinePhotograph color='#586069' size='1.2em'/> <div className={s.li_text}>Photos</div></div>

        </div>
    )
};

export default Nav


