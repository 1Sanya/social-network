import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/store';
import { FriendsACT } from '../../Types/FriendsT';
import Friends from './Friends';
import { CallAC, followAC, OpenDialogAC } from '../../Redux/action-creators/friendsAC';

const mapPropsToState = (state: AppStateType) => ({
  profiles: state.friendsPage.profiles,
  totalUserCount: state.friendsPage.totalUserCount,
  pageSize: state.friendsPage.pageSize,
  currentPage: state.friendsPage.currentPage,
});

const mapDispatchToState = (dispatch: Dispatch<FriendsACT>) => ({
  followToggle: (userId: number) => {
    dispatch(followAC(userId));
  },
  call: (userId: number) => {
    dispatch(CallAC(userId));
  },
  message: (userId: number) => {
    dispatch(OpenDialogAC(userId));
  },
});

const FriendsContainer = connect(mapPropsToState, mapDispatchToState)(Friends);

export default FriendsContainer;
