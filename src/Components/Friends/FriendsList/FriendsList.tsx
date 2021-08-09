import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import s from './FriendsList.module.css'
import {
  fetchUsersAC,
  followAC,
} from '../../../Redux/action-creators/FriendsAC'
import { useTypedSelector } from '../../../hooks/hooks'
import { AppStateType } from '../../../Redux/store'
import { FriendItem } from './FriendItem/FriendItem'

const FriendsList: FC = () => {
  const {
    pageArray, profiles, loading, error, totalUserCount, pageSize
  } = useTypedSelector((state) => state.friendsPage)
  const dispatch = useDispatch()

  let { currentPage } = useTypedSelector(
    (state: AppStateType) => state.friendsPage
  )

  useEffect(() => {
    dispatch(fetchUsersAC())
    const pageCount = totalUserCount / pageSize

    for (let i = 1; i <= pageCount; i++) {
      pageArray.push(i)
    }
  }, [])

  if (loading) {
    return <div>Загружаеться...</div>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  const setCurrentPage = (id: number) => {
    currentPage = id
  }

  return (
    <div className={s.wrapper}>
      {profiles.map((p) => (
        <FriendItem
          key={p.id}
          name={p.name}
          img="https://www.searchpng.com/wp-content/uploads/2019/02/User-Icon-PNG.png"
          id={p.id}
          isFollow={p.isFollow}
          followToggle={() => {
            dispatch(followAC(p.id))
          }}
        />
      ))}
    </div>
  )
}

export default FriendsList
