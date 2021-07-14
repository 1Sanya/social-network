import React from "react";
import {connect} from "react-redux";
import Photos from "./Photos";
import {AppStateType} from "../../Redux/store";

let mapPropsToState = (state: AppStateType) => {
    return {
        ph: state.photosPage.photos
    }
}

let mapDispatchToState = () => {

}

let PhotosContainer = connect(mapPropsToState, mapDispatchToState)(Photos)

export default PhotosContainer;