import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import WallPosts from './WallPosts';
import { AppStateType } from '../../../../Redux/store';

const mapStateToProps = (state: AppStateType) => ({

  posts: state.profilePage.posts,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

const WallPostsContainer = connect(mapStateToProps, mapDispatchToProps)(WallPosts);
export default WallPostsContainer;
