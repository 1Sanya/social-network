export type usersT = {
  id: number,
  name: string,
}

export type DialogsT = {
  users: Array<usersT>,
  folders:Array<DialogFoldersT>,
  chats: Array<DialogsChatsT>,
  activeChat: any
}

export type DialogFoldersT = {
  id: number,
  text: string,
  isActive: boolean
}

export type DialogsChatsT = {
  id: number,
  name: string,
  img: string,
  folders?: Array<number> | number | null,
  isActive?: boolean
}

export enum DialogsAT {
  SET_ACTIVE_FOLDER = 'SET_ACTIVE_FOLDER',
  SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT',
  GET_ACTIVE_CHAT = 'GET_ACTIVE_CHAT'
}

export type setActiveFolderACT = {
  type: DialogsAT.SET_ACTIVE_FOLDER,
  id: number
}

export type setActiveChatACT = {
  type: DialogsAT.SET_ACTIVE_CHAT,
  id: number
}

export type getActiveChatACT = {
  type: DialogsAT.GET_ACTIVE_CHAT
}

export type DialogsACT = setActiveFolderACT |
  setActiveChatACT |
  getActiveChatACT
