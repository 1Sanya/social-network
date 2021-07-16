import React, { FC } from 'react';
import Friends_list from './Friends_list/Friends_list';
import Friends_search from './Friends_search/Friends_search';
import Friends_header from './Friends_header/Friends_header';
import May_be_friends from './May_be_friends/May_be_friends';
import Peoples_category from './Peoples_category/Peoples_category';

import s from './Friends.module.css';

import { FriendsProps } from '../../Types/FriendsT';

const Friends: FC<FriendsProps> = (props) => (
  <div className={s.wrapper}>

    <div>
      <Friends_header />
      <Friends_search />
      <Friends_list
        followToggle={props.followToggle}
        call={props.call}
        message={props.message}
        pageSize={props.pageSize}
        totalUserCount={props.totalUserCount}
        currentPage={props.currentPage}
      />
    </div>
    <div>
      <Peoples_category />
      <May_be_friends />
    </div>

  </div>

);

export default Friends;
