import { DialogsACT, DialogsAT, DialogsT } from '../../Types/DialogsT'

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
    { id: 1, text: 'my', isActive: true },
    { id: 2, text: 'work', isActive: false },
    { id: 3, text: 'cs', isActive: false },
    { id: 4, text: 'микро', isActive: false },
    { id: 5, text: 'туча', isActive: false },
    { id: 6, text: 'туча', isActive: false },
    { id: 7, text: 'туча', isActive: false },
    { id: 8, text: 'туча', isActive: false },
  ]
}

const dialogsReducer = (state = initialState, action: DialogsACT) => {
  switch (action.type) {
    case DialogsAT.SET_ACTIVE_FOLDER:
      return {
        ...state,
        folders: state.folders.map((object) => {
          if (action.id === object.id) {
            return {
              ...object,
              isActive: true
            }
          }
          return {
            ...object,
            isActive: false
          }
        }),
      }
    default:
      return state
  }
}

export default dialogsReducer
