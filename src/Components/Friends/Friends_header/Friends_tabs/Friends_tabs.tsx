import React from 'react';
import { Link } from 'react-router-dom';
import s from './Friends_tabs.module.css';

const Friends_tabs = () => {
  const selectedToggle = () => {

  };

  return (
    <div className={s.wrapper}>
      <Link className={`${s.link} ${s.selected}`} onClick={selectedToggle} to="/friends?section=all">
        All friends
        107
      </Link>
      <Link className={s.link} onClick={selectedToggle} to="/friends?section=online">Friends online 28</Link>
    </div>
  );
};

export default Friends_tabs;
