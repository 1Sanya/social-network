import { ReactNode } from 'react'

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
}

export interface Dialogs {
  children?: ReactNode;
}
