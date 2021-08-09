import { AnyAction } from 'redux'
import { DialogsT } from '../../Types/DialogsT'

const initialState: DialogsT = {
  users: [
    {
      id: 1,
      name: 'Sanya',
    },
    {
      id: 2,
      name: 'Sofia',
    },
    {
      id: 3,
      name: 'Zed',
    },
    {
      id: 4,
      name: 'Yi',
    },
    {
      id: 5,
      name: 'Tom',
    },
  ],
}

// todo anyActionType

const dialogsReducer = (state = initialState, action: AnyAction) => state

export default dialogsReducer
