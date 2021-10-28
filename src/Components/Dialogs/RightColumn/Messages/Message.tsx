import React, { FC } from 'react'
import { messagesT } from '../../../../Types/DialogsT'
import s from './Message.module.scss'

const Message:FC<messagesT> = (props) => {
  const {
    sendByMe,
    id,
    content,
    isImage
  } = props
  return (
    <div className={s.wrapper}>
      <div className={sendByMe ? `${s.messageByMe} ${s.message}` : `${s.messageByCompanion} ${s.message}`}>
        {!isImage ? content : <img className={s.img} src={content} alt="" />}
      </div>
    </div>
  )
}

export default Message
