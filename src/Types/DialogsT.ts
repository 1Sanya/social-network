export type DialogsT = {
  folders:Array<DialogFoldersT>,
  chats: Array<DialogsChatsT>,
  emoji: Array<emojiPacT>
  stickers: Array<stickerPacT>,
  isEmojiSelected: boolean,
  activeChat: number | null,
  activeEmojiPac: number | null,
  activeStickerPac: number | null,
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

export type emojiPacT = {
  name: string,
  isActive: boolean,
  pacIcon: string
  smiles: Array<string>
}

export type stickerPacT = {
  name: string,
  isActive: boolean
  pacPictureUrl: string
  stickers: Array<string>
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
  EMOJI_STICKER_TOGGLE = 'EMOJI_STICKER_TOGGLE',
  SET_EMOJI_PACK = 'SET_EMOJI_PACK',
  SET_STICKER_PACK = 'SET_STICKER_PACK'
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
  stickerUrl: string
}

export type emojiStickerToggleACT = {
  type: DialogsAT.EMOJI_STICKER_TOGGLE,
  isEmojiSelected: boolean
}

export type setEmojiPackACT = {
  type: DialogsAT.SET_EMOJI_PACK,
  id: number
}

export type setStickerPackACT = {
  type: DialogsAT.SET_STICKER_PACK,
  id: number
}

export type DialogsACT = setActiveFolderACT |
  setActiveChatACT |
  setNewMessageACT |
  AddNewMessageACT |
  addEmojiACT |
  setLastMessageACT |
  sendStickerACT |
  emojiStickerToggleACT |
  setEmojiPackACT |
  setStickerPackACT
