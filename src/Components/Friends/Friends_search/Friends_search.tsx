import React from 'react';
import s from './Friends_search.module.css';

const Friends_search = () => (
  <div className={s.wrapper}>
    <input className={s.input} type="text" placeholder="Search" />
  </div>
);

export default Friends_search;
