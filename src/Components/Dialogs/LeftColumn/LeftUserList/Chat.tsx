import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import s from './LeftUserList.module.css'
import { setLastMessageAC } from '../../../../Redux/action-creators/DialogsAC'

export const Chat = (props:any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      dispatch(setLastMessageAC(props.id, props.messages[0].content))
    } catch (e) {
      dispatch(setLastMessageAC(props.id, ''))
    }
  }, [])
  return (
    <div
      onClick={() => {
        props.activeChatToggle!(props.id!)
      }}
      className={props.isActive ? `${s.chatWrapper} ${s.active}` : `${s.chatWrapper}`}
    >
      <img className={s.img} src={props.img} alt="" />
      <div className={s.nameAndMessage}>
        <div className={s.name}>{props.name}</div>
        <div className={props.isActive ? `${s.message} ${s.active}` : `${s.message}`}>
          {props.lastMessage}
        </div>
      </div>
    </div>
  )
}
