import React from 'react'
import s from './LeftFolders.module.scss'
import { useTypedSelector } from '../../../../../hooks/hooks'
import { Scrollable } from '../../../../../hooks/Scrollable'

const LeftFolders = () => {
  const { folders } = useTypedSelector((state) => state.dialogsPage)
  return (
    <div className={s.tabMenu}>
      <Scrollable class={s.items}>
        {folders.map((f) => <div><button key={f.id} className={s.btn}>{f.text}</button></div>)}
      </Scrollable>
    </div>
  )
}
export default LeftFolders
