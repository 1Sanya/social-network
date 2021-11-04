import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiMessageCircle } from 'react-icons/fi'
import { HiOutlinePhotograph, IoPeopleOutline } from 'react-icons/all'
import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'

const Nav = () => (
  <div className={s.nav_wr}>
    <div className={s.li_wr}>
      <NavLink className={s.li} to="/profile">
        {' '}
        <CgProfile color="#777" size="1.4em" />
        My profile
      </NavLink>
    </div>
    <div className={s.li_wr}>
      <NavLink className={s.li} to="/messenger">
        {' '}
        <FiMessageCircle color="#777" size="1.4em" />
        Messenger
      </NavLink>
    </div>

    <div className={s.li_wr}>
      <NavLink className={s.li} to="/friends">
        {' '}
        <IoPeopleOutline color="#777" size="1.4em" />
        Friends
      </NavLink>
    </div>
    <div className={s.li_wr}>
      <NavLink className={s.li} to="/photos">
        {' '}
        <HiOutlinePhotograph color="#777" size="1.4em" />
        Photos
      </NavLink>
    </div>
  </div>
)

export default Nav
