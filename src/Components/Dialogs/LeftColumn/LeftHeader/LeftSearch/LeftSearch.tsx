import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import s from './LeftSearch.module.css'

const LeftSearch = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className={s.wrapper}>
      <AiOutlineSearch
        className={status ? `${s.icon} ${s.focused}` : `${s.icon}`}
      />
      <input onBlur={() => (setStatus(false))} onFocus={() => (setStatus(true))} className={s.input} type="text" placeholder="Search" />
    </div>
  )
}
export default LeftSearch
