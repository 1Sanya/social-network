import {
  addEmojiACT,
  AddNewMessageACT,
  DialogsAT,
  setActiveChatACT,
  setActiveFolderACT,
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

export const addNewMessageAC = (id: number):AddNewMessageACT => ({
  type: DialogsAT.ADD_NEW_MESSAGE,
  id
})

export const addEmojiAC = (id:number, smile: string):addEmojiACT => ({
  type: DialogsAT.ADD_EMOJI,
  id,
  smile
})
