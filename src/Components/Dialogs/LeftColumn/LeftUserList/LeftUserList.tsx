import React from 'react'
import s from './LeftUserList.module.css'
import { useTypedSelector } from '../../../../hooks/hooks'
import Chat from './Chat'

const LeftUserList = () => {
  const { chats } = useTypedSelector((state) => state.dialogsPage)
  return (
    <div>
      {chats.map((chat) => (
        <Chat
          id={chat.id}
          name={chat.name}
          img={chat.img}
          folders={chat.folders}
        />
      ))}
    </div>
  )
}
export default LeftUserList
