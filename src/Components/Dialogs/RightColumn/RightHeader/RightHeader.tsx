import React, { FC } from 'react'
import s from './RightHeader.module.css'

const RightHeader:FC<any> = (props) => (
  <div className={s.wrapper}>
    {props.name}
  </div>
)

export default RightHeader
