import React from 'react'
import { useTypedSelector } from '../../../../hooks/hooks'
import Chat from './Chat'

const LeftUserList = () => {
  const { chats, folders } = useTypedSelector((state) => state.dialogsPage)

  const chati = folders.map((folder) => {
    if (folder.isActive) {
      return chats.map((chat) => {
        if (chat.folders === folder.id) {
          return <Chat key={chat.id} id={chat.id} name={chat.name} img={chat.img} />
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
