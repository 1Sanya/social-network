import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/all'
import s from './RightHeader.module.scss'
import { useTypedSelector } from '../../../../hooks/hooks'

const RightHeader = () => {
  const { chats, activeChat } = useTypedSelector((state) => state.dialogsPage)
  if (activeChat) {
    return (
      <div className={s.wrapper}>
        <div className={s.subWrapper}>
          <img className={s.img} src={chats[activeChat! - 1].img} alt="" />
          <p className={s.name}>{chats[activeChat! - 1].name}</p>
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
  return <div className={s.tramplayWrapper} />
}

export default RightHeader
