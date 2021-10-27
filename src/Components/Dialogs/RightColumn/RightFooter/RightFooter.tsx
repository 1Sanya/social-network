import React from 'react'
import { useDispatch } from 'react-redux'
import Emoji from 'a11y-react-emoji/lib/Emoji'
import {
  AiOutlinePaperClip,
  CgFile,
  FaRegSmile,
  IoMdPhotos,
  MdSend
} from 'react-icons/all'
import s from './RightFooter.module.scss'
import {
  addEmojiAC,
  addNewMessageAC,
  setNewMessageAC,
} from '../../../../Redux/action-creators/DialogsAC'
import { useTypedSelector } from '../../../../hooks/hooks'

const RightFooter = () => {
  const { chats, activeChat, emoji } = useTypedSelector((state) => state.dialogsPage)
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
        <div className={s.stickersBubbleMenuWrapper}>
          <div className={s.stickersBubbleMenu}>
            {emoji.map((smile) => (
              <Emoji
                onClick={() => dispatch(addEmojiAC(Number(id), smile.smile))}
                className={s.emoji}
                symbol={smile.smile}
              />
            ))}
          </div>
        </div>
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
        <div className={s.addFileBubbleMenuWrapper}>
          <div className={s.addFileBubbleMenu}>
            <button className={s.addFileBubbleMenuItem}>
              <IoMdPhotos className={s.addFileBubbleIcon} />
              Photo or video
            </button>
            <button className={s.addFileBubbleMenuItem}>
              <CgFile className={s.addFileBubbleIcon} />
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
