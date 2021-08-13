import React, { FC } from 'react'
import s from './LeftColumn.module.css'
import LeftHeader from './LeftHeader/LeftHeader'
import LeftUserList from './LeftUserList/LeftUserList'

export const LeftColumn: FC = () => (
  <div>
    <LeftHeader />
    <LeftUserList />
  </div>
)

export default LeftColumn
