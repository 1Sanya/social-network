import React, { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/all'
import s from './RightHeader.module.scss'

const RightHeader:FC<any> = (props) => {
  const { activeChat } = props
  return (
    <div className={s.wrapper}>
      <div className={s.subWrapper}>
        <img className={s.img} src={activeChat.img} alt="" />
        <p className={s.name}>{activeChat.name}</p>
      </div>
      <div className={s.subWrapper}>
        <div className={`${s.iconWrapper} ${s.leftIcon}`}>
          <AiOutlineSearch className={s.icon} />
        </div>
        <div className={s.iconWrapper}>
          <BiDotsVerticalRounded className={s.icon} />
        </div>
      </div>
    </div>
  )
}

export default RightHeader
