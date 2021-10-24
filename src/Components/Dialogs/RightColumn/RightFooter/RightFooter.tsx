import React, { FC } from 'react'
import s from './RightFooter.module.css'

const RightFooter:FC<any> = (props) => {
  const { activeChat } = props
  return (
    <div className={s.wrapper}>
      RightFooter
    </div>
  )
}

export default RightFooter
