import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../../hooks/hooks'
import { setActiveChatAC } from '../../../../Redux/action-creators/DialogsAC'
import { Chat } from './Chat'
import s from './LeftUserList.module.css'

const LeftUserList = () => {
  const { chats, folders } = useTypedSelector((state) => state.dialogsPage)
  const dispatch = useDispatch()

  const chatList = folders.map((folder) => {
    if (folder.isActive) {
      return chats.map((chat) => {
        if (chat.folders === folder.id) {
          return (
            <Chat
              lastMessage={chat.lastMessage}
              messages={chat.messages}
              key={chat.id}
              id={chat.id}
              isActive={chat.isActive}
              name={chat.name}
              img={chat.img}
              activeChatToggle={() => {
                dispatch(setActiveChatAC(chat.id!))
              }}
            />
          )
        }
      })
    }
  })
  return (
    <div className={s.wrapper}>
      {chatList}
    </div>
  )
}

export default LeftUserList
