import React from 'react'
import Message from './Message'
import s from './Messages.module.scss'
import { useTypedSelector } from '../../../../hooks/hooks'

const Messages = () => {
  const { chats } = useTypedSelector((state) => state.dialogsPage)
  const messagesList = chats.map((chat) => {
    if (chat.isActive) {
      return (
        chat.messages!.map((message) => (
          <Message
            isSticker={message.isSticker}
            id={message.id}
            sendByMe={message.sendByMe}
            content={message.content}
            isImage={message.isImage}
          />
        ))
      )
    }
  })
  return (
    <div className={s.wrapper}>
      {messagesList}
    </div>
  )
}

export default Messages
