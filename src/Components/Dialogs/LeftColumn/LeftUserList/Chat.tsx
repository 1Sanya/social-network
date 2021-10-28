import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import s from './LeftUserList.module.css'
import { setLastMessageAC } from '../../../../Redux/action-creators/DialogsAC'
import { DialogsChatsT } from '../../../../Types/DialogsT'

export const Chat = (props:DialogsChatsT) => {
  const dispatch = useDispatch()
  const {
    id, newMessage, img, lastMessage, isActive,
    activeChatToggle, folders, messages, name
  } = props
  useEffect(() => {
    try {
      dispatch(setLastMessageAC(
        id!, messages![0].content, messages![0].isImage, messages![0].isSticker
      ))
    } catch (e) {
      dispatch(setLastMessageAC(id!, '', false, false))
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
