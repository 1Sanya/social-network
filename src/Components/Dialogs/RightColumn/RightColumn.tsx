import React from 'react'
import Messages from './Messages/Messages'
import s from './RightColumn.module.css'
import RightHeader from './RightHeader/RightHeader'
import RightFooter from './RightFooter/RightFooter'
import { useTypedSelector } from '../../../hooks/hooks'

export const RightColumn = () => {
  const { activeChat } = useTypedSelector((state) => state.dialogsPage)
  return (
    <div className={s.RightColumn}>
      <RightHeader activeChat={activeChat[0]} />
      <Messages activeChat={activeChat[0]} />
      <RightFooter activeChat={activeChat[0]} />
    </div>
  )
}

export default RightColumn
