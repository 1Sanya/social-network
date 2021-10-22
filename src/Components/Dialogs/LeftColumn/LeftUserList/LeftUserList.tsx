import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../../hooks/hooks'
import Chat from './Chat'
import { getActiveChatAC, setActiveChatAC } from '../../../../Redux/action-creators/DialogsAC'

const LeftUserList = () => {
  const { chats, folders } = useTypedSelector((state) => state.dialogsPage)
  const dispatch = useDispatch()

  const chati = folders.map((folder) => {
    if (folder.isActive) {
      return chats.map((chat) => {
        if (chat.folders === folder.id) {
          return (
            <Chat
              key={chat.id}
              id={chat.id}
              name={chat.name}
              img={chat.img}
              activeChatToggle={() => {
                dispatch(setActiveChatAC(chat.id))
                dispatch(getActiveChatAC())
              }}
            />
          )
        }
      })
    }
  })
  return (
    <div>
      {chati}
    </div>
  )
}

export default LeftUserList
