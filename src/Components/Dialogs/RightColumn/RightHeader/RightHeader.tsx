import React, { FC } from 'react'
import s from './RightHeader.module.css'

const RightHeader:FC<any> = (props) => {
  const { activeChat } = props
  return (
    <div className={s.wrapper}>
      <div>{activeChat.name}</div>
    </div>
  )
}

export default RightHeader
