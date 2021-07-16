import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './Friends_list.module.css';
import { FriendsProps } from '../../../Types/FriendsT';
import FriendItem from './FriendItem/FriendItem';
import { fetchUsers } from '../../../Redux/action-creators/friendsAC';
import { useTypedSelector } from '../../../hooks/hooks';

const Friends_list: FC<FriendsProps> = (props) => {
  let {
    pageArray,
    profiles,
    loading,
    error,
    currentPage,
    totalUserCount,
    pageSize,
  } = useTypedSelector((state) => state.friendsPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    const pageCount = totalUserCount / pageSize;

    for (let i = 1; i <= pageCount; i++) {
      pageArray.push(i);
    }
  }, []);

  if (loading) {
    return <div>Загружаеться...</div>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  const setCurrentPage = (id: number) => {
    currentPage = id;
  };

  return (

    <div className={s.wrapper}>

      {/* {pageArray.map(p => <span onClick={() => setCurrentPage(p)} className={(currentPage === p)? s.selectedPage: s.ne} >{p}</span>)} */}

      {profiles.map((p) => (
        <FriendItem
          key={p.id}
          name={p.name}
          img="https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG.png"
          id={p.id}
          isFollow={p.isFollow}
          followToggle={props.followToggle}
        />
      ))}

    </div>
  );
};

export default Friends_list;
