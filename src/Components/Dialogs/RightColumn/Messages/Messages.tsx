import React, { FC } from 'react'
import s from './Messages.module.css'

const Messages:FC<any> = (props) => {
  const { activeChat } = props
  return (
    <div className={s.wrapper}>
      Messages
    </div>
  )
}

export default Messages
