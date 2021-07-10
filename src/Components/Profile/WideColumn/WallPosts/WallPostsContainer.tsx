import React from "react";
import WallPosts from "./WallPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../Redux/store";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {

        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {}
}

const WallPostsContainer = connect(mapStateToProps, mapDispatchToProps)(WallPosts);
export default WallPostsContainer