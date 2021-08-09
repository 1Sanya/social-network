import React, { FC } from 'react'
import { DialogsItemProps } from '../../../../Types/DialogsT'
import s from './DialogsItem.module.css'

export const DialogsItem: FC<DialogsItemProps> = (props: DialogsItemProps) => (
  <div className={s.wrapper}>{props.name}</div>
)
