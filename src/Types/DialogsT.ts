export type usersT = {
  id: number,
  name: string,
}

export type DialogsT = {
  users: Array<usersT>,
  folders:Array<DialogFoldersT>,
}

export type DialogFoldersT = {
  id: number,
  text: string,
  isActive: boolean
}

export enum DialogsAT {
  SET_ACTIVE_FOLDER = 'SET_ACTIVE_FOLDER'
}

export type setActiveFolderACT = {
  type: DialogsAT.SET_ACTIVE_FOLDER,
  id: number
}

export type DialogsACT = setActiveFolderACT
