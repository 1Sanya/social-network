import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Dialogs from './Dialogs';
import { AppStateType } from '../../Redux/store';

const mapPropsToState = (state: AppStateType) => ({
  id: state.dialogsPage.id,
});

const mapDispatchToState = (dispatch: Dispatch) => {

};

const DialogsContainer = connect(mapPropsToState, mapDispatchToState)(Dialogs);

export default DialogsContainer;
