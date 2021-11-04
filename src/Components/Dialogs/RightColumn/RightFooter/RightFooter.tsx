import React from 'react'
import { useDispatch } from 'react-redux'
import {
  AiOutlinePaperClip,
  BiSticker,
  CgFile,
  FaRegSmile,
  IoMdPhotos,
  MdSend,
} from 'react-icons/all'
import s from './RightFooter.module.scss'
import {
  addEmojiAC,
  addNewMessageAC,
  emojiStickerToggleAC,
  sendStickerAC,
  setEmojiPacAC,
  setNewMessageAC,
  setStickerPacAC,
} from '../../../../Redux/action-creators/DialogsAC'
import { useTypedSelector } from '../../../../hooks/hooks'

const RightFooter = () => {
  const {
    chats, activeChat, emoji, stickers, isEmojiSelected, activeEmojiPac, activeStickerPac
  } = useTypedSelector((state) => state.dialogsPage)
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
        dispatch(addNewMessageAC(id!, false, false, null))
      }
    }
    return (
      <div className={s.wrapper}>
        <button className={`${s.button} ${s.smile}`}>
          <FaRegSmile className={s.smilesIcon} />
        </button>

        <div className={s.stickersWrapper}>
          <div className={s.stickersMenu}>
            <div className={s.stickersBubbleSubNav}>
              { isEmojiSelected
                ? emoji.map((emojiPac, i) => (
                  <div onClick={() => {
                    dispatch(setEmojiPacAC(i + 1))
                  }}
                  >
                    <img className={emojiPac.isActive ? `${s.stickerNavIcon} ${s.selected}` : s.stickerNavIcon} src={emojiPac.pacIcon} alt="" />
                  </div>
                ))
                : stickers.map((stickerPac, i) => (
                  <div onClick={() => {
                    dispatch(setStickerPacAC(i + 1))
                  }}
                  >
                    <img className={stickerPac.isActive ? `${s.stickerNavIcon} ${s.selected}` : s.stickerNavIcon} src={stickerPac.pacPictureUrl} alt="" />
                  </div>
                ))}
            </div>
            <div className={s.stickersBubbleContent}>
              {isEmojiSelected
                ? activeEmojiPac
                  ? emoji.map((emojiPac, i) => {
                    if (i + 1 === activeEmojiPac) {
                      return (
                        <div className={s.emojiPacWrapper}>
                          <div className={s.emojiPacName}>
                            {emojiPac.name}
                          </div>
                          {emojiPac.smiles.map((smile) => (
                            <span
                              onClick={() => dispatch(addEmojiAC(smile))}
                              className={s.stickersBubbleItem}
                            >
                              {smile}
                            </span>
                          ))}
                        </div>
                      )
                    }
                  })
                  : emoji.map((emojiPac) => (
                    <div className={s.emojiPacWrapper}>
                      <div className={s.emojiPacName}>
                        {emojiPac.name}
                      </div>
                      {emojiPac.smiles.map((smile) => (
                        <span
                          onClick={() => dispatch(addEmojiAC(smile))}
                          className={s.singleEmoji}
                        >
                          {smile}
                        </span>
                      ))}
                    </div>

                  ))
                : activeStickerPac
                  ? stickers.map((stickersPac, i) => {
                    if (i + 1 === activeStickerPac) {
                      return (
                        <div className={s.emojiPacWrapper}>
                          <div className={s.emojiPacName}>
                            {stickersPac.name}
                          </div>
                          {stickersPac.stickers.map((sticker) => (
                            <img
                              onClick={() => dispatch(sendStickerAC(sticker))}
                              className={s.singleSticker}
                              src={sticker}
                              alt=""
                            />
                          ))}
                        </div>
                      )
                    }
                  })
                  : stickers.map((stickersPac) => (
                    <div className={s.emojiPacWrapper}>
                      <div className={s.emojiPacName}>
                        {stickersPac.name}
                      </div>
                      {stickersPac.stickers.map((sticker) => (
                        <img
                          onClick={() => dispatch(sendStickerAC(sticker))}
                          className={s.singleSticker}
                          src={sticker}
                          alt=""
                        />
                      ))}
                    </div>

                  ))}
            </div>
            <div className={s.stickersBubbleNav}>
              <div>
                <button
                  className={s.navButton}
                  onClick={() => dispatch(emojiStickerToggleAC(true))}
                >
                  <FaRegSmile className={isEmojiSelected ? `${s.stickerNavIcon} ${s.active}` : s.stickerNavIcon} />
                </button>
                <button
                  className={s.navButton}
                  onClick={() => dispatch(emojiStickerToggleAC(false))}
                >
                  <BiSticker className={!isEmojiSelected ? `${s.stickerNavIcon} ${s.active}` : s.stickerNavIcon} />
                </button>
              </div>
            </div>
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
        <div className={s.addFileWrapper}>
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
        <button onClick={() => dispatch(addNewMessageAC(id!, false, false, null))} className={`${s.button} ${s.send}`}>
          <MdSend className={s.sendIcon} />
        </button>
      </div>
    )
  }
  return <div className={s.trampleyWrapper} />
}

export default RightFooter

// emoji.packs.map((emojiPac) => {
//   if (emojiPac.isActive) {
//     return (
//     )
//   } else: return ""
//
//   return (
//   )
// })
