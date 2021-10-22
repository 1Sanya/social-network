import React, { FC } from 'react'
import { DialogsChatsT } from '../../../../Types/DialogsT'
import s from './LeftUserList.module.css'

const Chat:FC<DialogsChatsT> = (props:DialogsChatsT) => {
  const {
    activeChatToggle,
    img,
    folders,
    isActive,
    id,
    name
  } = props
  return (
    <div
      onClick={() => {
        if (activeChatToggle) {
          activeChatToggle(id)
        }
      }}
      className={s.chatWrapper}
    >
      <img className={s.img} src={img} alt="" />
      <div className={s.nameAndMessage}>
        <div className={s.name}>{name}</div>
        <div className={s.message}>Замена дворников в мерсе</div>
      </div>
    </div>
  )
}
export default Chat
