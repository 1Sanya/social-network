import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";

let mapPropsToState = (state) => {
    return {
        profiles: state.friendsPage.profiles
    }
}

let mapDispatchToState = (dispatch) => {

}

let FriendsContainer = connect (mapPropsToState, mapDispatchToState) (Friends)

export default FriendsContainer;