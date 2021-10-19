export type usersT = {
  id: number,
  name: string,
}

export interface DialogsItemProps {
  id: number,
  name: string,
}

export type DialogsT = {
  users: Array<usersT>,
  folders:Array<MessengerFoldersT>,
}

export type MessengerFoldersT = {
  id: number,
  text: string,
}
