import {
  DialogsAT,
  getActiveChatACT,
  setActiveChatACT,
  setActiveFolderACT,
} from '../../Types/DialogsT'

export const setActiveFolderAC = (id: number):setActiveFolderACT => ({
  type: DialogsAT.SET_ACTIVE_FOLDER,
  id
})

export const setActiveChatAC = (id: number):setActiveChatACT => ({
  type: DialogsAT.SET_ACTIVE_CHAT,
  id
})

export const getActiveChatAC = ():getActiveChatACT => ({
  type: DialogsAT.GET_ACTIVE_CHAT
})