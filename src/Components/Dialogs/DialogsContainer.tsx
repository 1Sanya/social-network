import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { AppStateType } from '../../Redux/store'

const mapPropsToState = (state: AppStateType) => ({
  id: state.dialogsPage.id,
})

const DialogsContainer = connect(mapPropsToState)(Dialogs)

export default DialogsContainer
