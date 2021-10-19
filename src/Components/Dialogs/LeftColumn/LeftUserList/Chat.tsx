import React, { FC } from 'react'
import { DialogsChatsT } from '../../../../Types/DialogsT'
import s from './LeftUserList.module.css'

const Chat:FC<DialogsChatsT> = (props) => (
  <div className={s.chatWrapper}>
    <img className={s.img} src={props.img} alt="" />
    <div className={s.nameAndMessage}>
      <div className={s.name}>{props.name}</div>
      <div className={s.message}>Замена дворников в мерсе</div>
    </div>
  </div>
)

export default Chat
