import React, { FC } from 'react'
import { BiUserPlus, BsDot, HiOutlineX } from 'react-icons/all'
import s from './FriendItem.module.css'
import { FriendsItemProps } from '../../../../Types/FriendsT'

export const FriendItem: FC<FriendsItemProps> = (props: FriendsItemProps) => (
  <div className={s.wrapper}>
    <a href={String(props.id)}>
      <img className={s.ava} src={String(props.img)} alt="" />
    </a>

    <div className={s.elsePhotoWr}>
      <div className={s.info}>
        <a className={s.name} href={String(props.id)}>
          {props.name}
        </a>
        <div className={s.contact}>
          <a className={s.contact_link} href="#">
            Write message
          </a>
          <BsDot className={s.dot} color="#777776" size="0.8em" />
          <a className={s.contact_link} href="#">
            Call
          </a>
        </div>
      </div>

      <div className={s.delete_btn}>
        {' '}
        {props.isFollow ? (
          <HiOutlineX
            onClick={() => {
              props.followToggle(props.id)
            }}
            color="#555556"
            size="1.4em"
          />
        ) : (
          <BiUserPlus
            onClick={() => {
              props.followToggle(props.id)
            }}
            color="#555556"
            size="1.4em"
          />
        )}
      </div>
    </div>
  </div>
)
