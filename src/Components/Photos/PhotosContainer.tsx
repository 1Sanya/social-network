import React from "react";
import {connect} from "react-redux";
import Photos from "./Photos";

let mapPropsToState = () => {
    return {}
}

let mapDispatchToState = () => {

}

let PhotosContainer = connect(mapPropsToState, mapDispatchToState)(Photos)

export default PhotosContainer;