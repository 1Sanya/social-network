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
  folders: [
    { id: 1, text: 'my', },
    { id: 2, text: 'work', },
    { id: 3, text: 'cs', },
    { id: 4, text: 'микро', },
    { id: 4, text: 'туча', },
    { id: 5, text: 'туча', },
    { id: 6, text: 'туча', },
    { id: 7, text: 'туча', },
  ]
}

// todo anyActionType

const dialogsReducer = (state = initialState, action: AnyAction) => state

export default dialogsReducer
