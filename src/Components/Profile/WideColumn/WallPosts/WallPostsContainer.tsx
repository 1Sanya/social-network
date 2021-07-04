import React from "react";
import WallPost from "./Wall_post/WallPost";
import WallPosts from "./WallPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../Redux/store";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) => {
    return {
        //todo fix

        // posts: state.profilePage.posts.map(m => <WallPost name={m.name} text={m.text} likes={m.likes}/>)
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

const WallPostsContainer = connect(mapStateToProps, mapDispatchToProps)(WallPosts);
export default WallPostsContainer