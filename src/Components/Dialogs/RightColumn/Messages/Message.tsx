import React, { FC } from 'react'
import { messagesT } from '../../../../Types/DialogsT'
import s from './Message.module.scss'

const Message:FC<messagesT> = (props) => {
  const {
    sendByMe,
    id,
    content,
    isImage,
    isSticker
  } = props
  return (
    <div className={s.wrapper}>
      <div className={sendByMe ? `${s.alignRight} ${s.message}` : `${s.AlignLeft} ${s.message}`}>
        {isImage || isSticker ? <img className={s.img} src={content} alt="" />
          : <div className={sendByMe ? s.myMessage : s.companionMessage}>{content}</div>}
      </div>
    </div>
  )
}

export default Message
