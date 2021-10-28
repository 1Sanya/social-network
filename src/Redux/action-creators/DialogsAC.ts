import {
  addEmojiACT,
  AddNewMessageACT,
  DialogsAT,
  setActiveChatACT,
  setActiveFolderACT, setLastMessageACT,
  setNewMessageACT,
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

export const addEmojiAC = (id:number, smile: string):addEmojiACT => ({
  type: DialogsAT.ADD_EMOJI,
  id,
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
