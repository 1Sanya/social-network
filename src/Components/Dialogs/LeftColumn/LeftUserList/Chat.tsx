import React, { FC } from 'react'
import { DialogsChatsT } from '../../../../Types/DialogsT'
import s from './LeftUserList.module.css'

const Chat:FC<DialogsChatsT> = (props) => (
  <div
    onClick={() => { props.activeChatToggle!(props.id!) }}
    className={props.isActive ? `${s.chatWrapper} ${s.active}` : `${s.chatWrapper}`}
  >
    <img className={s.img} src={props.img} alt="" />
    <div className={s.nameAndMessage}>
      <div className={s.name}>{props.name}</div>
      <div className={props.isActive ? `${s.message} ${s.active}` : `${s.message}`}>Замена дворников в мерсе</div>
    </div>
  </div>
)

export default Chat
