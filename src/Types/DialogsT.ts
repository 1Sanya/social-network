export type usersT = {
  id: number,
  name: string,
}

export type DialogsT = {
  users: Array<usersT>,
  folders:Array<DialogFoldersT>,
  chats: Array<DialogsChatsT>,
  activeChat: number | null,
  emoji: Array<emojiT>
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
  messages?: Array<messagesT>,
  lastMessage?: string
}

export type emojiT = {
  id: number | undefined,
  smile: string
}

export type messagesT = {
  id: number,
  sendByMe: boolean,
  content: string,
  isImage: boolean,
  isSticker: boolean
}

export enum DialogsAT {
  SET_ACTIVE_FOLDER = 'SET_ACTIVE_FOLDER',
  SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT',
  GET_ACTIVE_CHAT = 'GET_ACTIVE_CHAT',
  SET_NEW_MESSAGE = 'SET_NEW_MESSAGE',
  ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE',
  ADD_EMOJI = 'ADD_EMOJI',
  SET_LAST_MESSAGE = 'SET_LAST_MESSAGE',
  SEND_STICKER = 'SEND_STICKER',
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
  id: number,
  isImage: boolean,
  isSticker: boolean,
  contentUrl: null | string
}

export type addEmojiACT = {
  type: DialogsAT.ADD_EMOJI,
  id: number,
  smile: string
}

export type setLastMessageACT = {
  type: DialogsAT.SET_LAST_MESSAGE,
  id: number,
  isImage: boolean,
  isSticker: boolean,
  content: string | null
}

export type sendStickerACT = {
  type: DialogsAT.SEND_STICKER,
  id: number,
  content: string
}
export type DialogsACT = setActiveFolderACT |
  setActiveChatACT |
  setNewMessageACT |
  AddNewMessageACT |
  addEmojiACT |
  setLastMessageACT
