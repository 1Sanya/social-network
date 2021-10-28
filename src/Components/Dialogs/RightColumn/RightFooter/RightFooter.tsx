import React from 'react'
import { useDispatch } from 'react-redux'
import {
  AiOutlinePaperClip,
  CgFile,
  FaRegSmile,
  IoMdPhotos,
  MdSend
} from 'react-icons/all'
import s from './RightFooter.module.scss'
import { addNewMessageAC, setNewMessageAC } from '../../../../Redux/action-creators/DialogsAC'
import { useTypedSelector } from '../../../../hooks/hooks'

const RightFooter = () => {
  const { chats, activeChat } = useTypedSelector((state) => state.dialogsPage)
  const dispatch = useDispatch()

  if (activeChat) {
    const currentChat = chats[activeChat! - 1]
    const {
      id,
      newMessage
    } = currentChat
    const inputRef: React.RefObject<HTMLInputElement> = React.createRef()
    const onChangeMessage = (() => {
      const text = inputRef.current?.value
      dispatch(setNewMessageAC(text!, id!))
    })
    const handleKeyDown = (event:any) => {
      if (event.key === 'Enter') {
        dispatch(addNewMessageAC(id!))
      }
    }
    return (
      <div className={s.wrapper}>
        <button className={`${s.button} ${s.smile}`}>
          <FaRegSmile className={s.smilesIcon} />
        </button>
        <input
          className={s.input}
          value={newMessage}
          ref={inputRef}
          onChange={onChangeMessage}
          type="text"
          onKeyDown={handleKeyDown}
        />
        <button className={`${s.button} ${s.paperClip}`}>
          <AiOutlinePaperClip className={s.paperClipIcon} />
        </button>
        <div className={s.bubbleMenuWrapper}>
          <div className={s.bubbleMenu}>
            <button className={s.bubbleMenuItem}>
              <IoMdPhotos className={s.bubbleIcon} />
              Photo or video
            </button>
            <button className={s.bubbleMenuItem}>
              <CgFile className={s.bubbleIcon} />
              File
            </button>
          </div>
        </div>
        <button onClick={() => dispatch(addNewMessageAC(id!))} className={`${s.button} ${s.send}`}>
          <MdSend className={s.sendIcon} />
        </button>
      </div>
    )
  }
  return <div className={s.trampleyWrapper} />
}

export default RightFooter
