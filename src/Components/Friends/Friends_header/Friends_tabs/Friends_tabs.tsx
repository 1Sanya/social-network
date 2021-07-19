import React from 'react'
import { Link } from 'react-router-dom'
import s from './Friends_tabs.module.css'

const Friends_tabs = () => (
  <div className={s.wrapper}>
    <Link className={`${s.link} ${s.selected}`} to="/friends?section=all">
      All friends 107
    </Link>
    <Link className={s.link} to="/friends?section=online">
      Friends online 28
    </Link>
  </div>
)

export default Friends_tabs
