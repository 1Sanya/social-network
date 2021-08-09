import React, { FC } from 'react'
import s from './DialogsList.module.css'
import { useTypedSelector } from '../../../hooks/hooks'
import { DialogsItem } from './DialogsChatItem/DialogsItem'

const DialogsList: FC = () => {
  const { users } = useTypedSelector((state) => state.dialogsPage)
  return (
    <div className={s.wrapper}>
      {users.map((u) => (
        <DialogsItem key={u.id} id={u.id} name={u.name} />
      ))}
    </div>
  )
}

export default DialogsList
