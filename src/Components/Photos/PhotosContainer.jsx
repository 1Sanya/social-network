import React from "react";
import {connect} from "react-redux";
import Photos from "./Photos";

let mapPropsToState = (state) => {
    return {

    }
}

let mapDispatchToState = (dispatch) => {

}

let PhotosContainer = connect (mapPropsToState, mapDispatchToState) (Photos)

export default PhotosContainer;