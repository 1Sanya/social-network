import React, { FC } from 'react'
import s from './Dialogs.module.css'
import LeftColumn from './LeftColumn/LeftColumn'
import RightColumn from './RightColumn/RightColumn'

export const Dialogs: FC = () => (
  <div className={s.page_wrapper}>
    <LeftColumn />
    <RightColumn />
  </div>
)

export default Dialogs
