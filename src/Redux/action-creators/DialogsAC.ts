import {
  addEmojiACT,
  AddNewMessageACT,
  DialogsAT, emojiStickerToggleACT,
  sendStickerACT,
  setActiveChatACT,
  setActiveFolderACT, setEmojiPackACT,
  setLastMessageACT,
  setNewMessageACT, setStickerPackACT,
} from '../../Types/DialogsT'

export const setActiveFolderAC = (id: number):setActiveFolderACT => ({
  type: DialogsAT.SET_ACTIVE_FOLDER,
  id
})

export const setActiveChatAC = (id: number):setActiveChatACT => ({
  type: DialogsAT.SET_ACTIVE_CHAT,
  id
})

export const setNewMessageAC = (newText: string, id: number):setNewMessageACT => ({
  type: DialogsAT.SET_NEW_MESSAGE,
  newText,
  id
})

export const addNewMessageAC = (
  id: number, isImage: boolean, isSticker: boolean, contentUrl: string | null
):AddNewMessageACT => ({
  type: DialogsAT.ADD_NEW_MESSAGE,
  id,
  isImage,
  isSticker,
  contentUrl
})

export const addEmojiAC = (smile: string):addEmojiACT => ({
  type: DialogsAT.ADD_EMOJI,
  smile
})

export const setLastMessageAC = (
  id: number, content: string | null, isImage: boolean, isSticker: boolean
):setLastMessageACT => ({
  type: DialogsAT.SET_LAST_MESSAGE,
  id,
  content,
  isImage,
  isSticker
})

export const sendStickerAC = (stickerUrl: string)
  :sendStickerACT => ({ type: DialogsAT.SEND_STICKER, stickerUrl })

export const setEmojiPacAC = (id: number)
  :setEmojiPackACT => ({ type: DialogsAT.SET_EMOJI_PACK, id })

export const setStickerPacAC = (id: number)
  :setStickerPackACT => ({ type: DialogsAT.SET_STICKER_PACK, id })

export const emojiStickerToggleAC = (isEmojiSelected: boolean)
  :emojiStickerToggleACT => ({ type: DialogsAT.EMOJI_STICKER_TOGGLE, isEmojiSelected })
