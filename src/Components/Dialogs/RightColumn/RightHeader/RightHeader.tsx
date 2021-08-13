import React from 'react'
import s from './RightHeader.module.css'
import RightSearch from './RightSearch/RightSearch'

const RightHeader = () => (
  <div className={s.wrapper}>
    <RightSearch />
  </div>
)

export default RightHeader
