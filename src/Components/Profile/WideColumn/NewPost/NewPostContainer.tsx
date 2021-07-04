import React from "react";
import {addPostAC, newPostTextAC} from "../../../../Redux/reducers/profileReducer";
import NewPost from "./NewPost";
import {connect, useDispatch} from "react-redux";
import {AppStateType} from "../../../../Redux/store";
import {Dispatch} from "redux";
import {Profile, ProfileAction} from "../../../../Types/Profile";

let mapStateToProps = (state:AppStateType) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ProfileAction>) => {
    return {
        createPost: () => {
            dispatch(addPostAC());
        },
        changeNewPostText: (newText: string) => {
            let action = newPostTextAC(newText);
            dispatch(action);

        }

    }
}


const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer