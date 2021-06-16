import React from "react";
import {addPostActionCreator, newPostTextActionCreator} from "../../../../Redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => {
            dispatch(addPostActionCreator());
            console.log('baba')
        },
        changeNewPostText: (text) => {
            let action = newPostTextActionCreator(text);
            dispatch(action);

            console.log('asd')
        }

    }
}


const NewPostContainer = connect (mapStateToProps, mapDispatchToProps) (NewPost);

export default NewPostContainer