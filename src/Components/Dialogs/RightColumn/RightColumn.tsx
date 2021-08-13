import React, { FC } from 'react'
import Messages from './Messages/Messages'
import s from './RightColumn.module.css'
import RightHeader from './RightHeader/RightHeader'
import RightFooter from './RightFooter/RightFooter'

export const RightColumn: FC = () => (
  <div>
    <RightHeader />
    <Messages />
    <RightFooter />
  </div>
)

export default RightColumn
