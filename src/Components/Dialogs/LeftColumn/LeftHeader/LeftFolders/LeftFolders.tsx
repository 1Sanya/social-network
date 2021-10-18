import React from 'react'
import { useDispatch } from 'react-redux'
import s from './LeftFolders.module.scss'
import { useTypedSelector } from '../../../../../hooks/hooks'
import { Scrollable } from '../../../../../hooks/Scrollable'
import { setActiveFolderAC } from '../../../../../Redux/action-creators/DialogsAC'

const LeftFolders = () => {
  const { folders } = useTypedSelector((state) => state.dialogsPage)
  const dispatch = useDispatch()
  return (
    <div className={s.tabMenu}>
      <Scrollable class={s.items}>
        {folders.map((f) => (
          <button
            key={f.id}
            className={f.isActive ? `${s.active} ${s.btn}` : s.btn}
            onClick={() => dispatch(setActiveFolderAC(f.id))}
          >
            {f.text}
          </button>
        ))}
      </Scrollable>
    </div>
  )
}
export default LeftFolders
