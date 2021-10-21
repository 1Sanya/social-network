import React from 'react'
import Messages from './Messages/Messages'
import s from './RightColumn.module.css'
import RightHeader from './RightHeader/RightHeader'
import RightFooter from './RightFooter/RightFooter'
import { useTypedSelector } from '../../../hooks/hooks'

export const RightColumn = () => {
  const { chats } = useTypedSelector((state) => state.dialogsPage)
  const activeChat = chats.map((chat) => {
    if (chat.isActive) {
      return chat
    }
  })
  return (
    <div className={s.RightColumn}>
      <RightHeader activeChat={activeChat} />
      <Messages activeChat={activeChat} />
      <RightFooter activeChat={activeChat} />
    </div>
  )
}

export default RightColumn
