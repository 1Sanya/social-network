import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Messages from './Messages/Messages'
import s from './RightColumn.module.css'
import RightHeader from './RightHeader/RightHeader'
import RightFooter from './RightFooter/RightFooter'
import { useTypedSelector } from '../../../hooks/hooks'
import { getActiveChatAC } from '../../../Redux/action-creators/DialogsAC'

export const RightColumn = () => {
  const { chats, activeChat } = useTypedSelector((state) => state.dialogsPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getActiveChatAC())
  }, [])
  return (
    <div className={s.RightColumn}>
      <RightHeader activeChat={activeChat[0]} />
      <Messages activeChat={activeChat[0]} />
      <RightFooter activeChat={activeChat[0]} />
    </div>
  )
}

export default RightColumn
