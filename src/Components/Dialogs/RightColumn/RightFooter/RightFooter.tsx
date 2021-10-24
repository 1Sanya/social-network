import React, { FC } from 'react'
import { FaRegSmile, MdSend } from 'react-icons/all'
import s from './RightFooter.module.scss'

const RightFooter:FC<any> = (props) => {
  const { activeChat } = props
  return (
    <div className={s.wrapper}>
      <button className={`${s.button} ${s.smile}`}>
        <FaRegSmile className={s.smilesIcon} />
      </button>
      <input className={s.input} type="text" />
      <button className={`${s.button} ${s.send}`}>
        <MdSend className={s.sendIcon} />
      </button>
    </div>
  )
}

export default RightFooter
