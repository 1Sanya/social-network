import React from "react";
import WallPost from "./Wall_post/WallPost";
import WallPosts from "./WallPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts.map(d => <WallPost name={d.name} text={d.text} likes={d.likes}/>)
    }
}

let mapDispatchToProps = () => {
    return {}
}

const WallPostsContainer = connect(mapStateToProps, mapDispatchToProps)(WallPosts);
export default WallPostsContainer