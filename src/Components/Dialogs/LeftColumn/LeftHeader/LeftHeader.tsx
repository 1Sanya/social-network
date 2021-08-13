import React from 'react'
import s from './LeftHeader.module.css'
import LeftSearch from './LeftSearch/LeftSearch'
import LeftFolders from './LeftFolders/LeftFolders'

const LeftHeader = () => (
  <div className={s.wrapper}>
    <LeftSearch />
    <LeftFolders />
  </div>
)

export default LeftHeader
