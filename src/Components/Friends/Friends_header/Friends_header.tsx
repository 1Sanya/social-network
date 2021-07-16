import React from 'react';
import s from './Friends_header.module.css';
import Friends_tabs from './Friends_tabs/Friends_tabs';
import Find_friends_btn from './Find_friends_btn/Find_friends_btn';

const Friends_header = () => (
  <div className={s.wrapper}>
    <Friends_tabs />
    <Find_friends_btn />
  </div>
);

export default Friends_header;
