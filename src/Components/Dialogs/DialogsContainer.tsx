import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redux/store";
import {Dispatch} from "redux";

let mapPropsToState = (state:AppStateType) => {
    return {
        id: state.dialogsPage.id
    }

}

let mapDispatchToState = (dispatch: Dispatch) => {

}

let DialogsContainer = connect(mapPropsToState, mapDispatchToState)(Dialogs)

export default DialogsContainer;

