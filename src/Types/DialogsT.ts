export type usersT = {
  id: number,
  name: string,
}

export type DialogsT = {
  users: Array<usersT>,
  folders:Array<DialogFoldersT>,
  chats: Array<DialogsChatsT>,
  activeChat: number | null
}

export type DialogFoldersT = {
  id: number,
  text: string,
  isActive: boolean
}

export type DialogsChatsT = {
  id?: number,
  name?: string,
  img?: string,
  folders?: Array<number> | number | null,
  isActive?: boolean,
  activeChatToggle?: (id: number) => void,
  newMessage?: string,
  messages?: Array<messagesT>
}

export type messagesT = {
  id: number,
  sendByMe: boolean,
  content: string
}

export enum DialogsAT {
  SET_ACTIVE_FOLDER = 'SET_ACTIVE_FOLDER',
  SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT',
  GET_ACTIVE_CHAT = 'GET_ACTIVE_CHAT',
  SET_NEW_MESSAGE = 'SET_NEW_MESSAGE',
  ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
}

export type setActiveFolderACT = {
  type: DialogsAT.SET_ACTIVE_FOLDER,
  id: number
}

export type setActiveChatACT = {
  type: DialogsAT.SET_ACTIVE_CHAT,
  id: number
}

export type setNewMessageACT = {
  type: DialogsAT.SET_NEW_MESSAGE,
  newText: string,
  id: number
}

export type AddNewMessageACT = {
  type: DialogsAT.ADD_NEW_MESSAGE,
  id: number
}

export type DialogsACT = setActiveFolderACT |
  setActiveChatACT |
  setNewMessageACT |
  AddNewMessageACT
