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
  ],
  chats: [
    {
      id: 1,
      name: 'Alexandr Tarasov',
      folders: 1,
      img: 'https://images.generated.photos/r5UH0rwpRxBobMyUZ8Gv4Bxs2TidIshdrsOf_jG075s/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvNTE1OTFh/ZjktMjZjMy00NTI1/LWJjNTEtOGQ1Zjlj/Mjc3NmVjLmpwZw.jpg',
      isActive: false,
      messages: [
        {
          id: 1,
          content: 'Go bratan',
          sendByMe: true
        },
        {
          id: 2,
          content: 'Sanya, go fotball',
          sendByMe: false
        }
      ],
      lastMessage: '',
      newMessage: ''
    },
    {
      id: 2,
      name: 'Yuri Khovansky',
      folders: 3,
      img: 'https://images.generated.photos/v9-fTp7Clud7yhuf4f-1KLaoaGBVpRD6aS9ApyjnHEU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvYmIxM2Mx/MGYtMDFjZC00NTgz/LWEwZTktOWNmZmY1/MDNiNTIwLmpwZw.jpg',
      isActive: false,
      messages: [],
      newMessage: '',
      lastMessage: ''
    },
    {
      id: 3,
      name: 'Maxim Ilyahov',
      folders: null,
      img: 'https://images.generated.photos/BKTf1DysznQJNZvR3_Ti2cwEeQZnrbqzcc1t-EMrc4k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMmUxMzcz/MzUtMzEwZC00ZmJm/LTg1NTgtYjdiNjhm/MzI4NjBlLmpwZw.jpg',
      isActive: false,
      messages: [],
      newMessage: '',
      lastMessage: ''
    },
    {
      id: 4,
      name: 'Mirage',
      folders: 3,
      img: 'data:image/jpeg;base64,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',
      isActive: false,
      messages: [],
      newMessage: '',
      lastMessage: ''
    },
    {
      id: 5,
      name: 'Тудушка',
      folders: 1,
      img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
      isActive: false,
      messages: [],
      newMessage: '',
      lastMessage: ''
    },
    {
      id: 6,
      name: 'React',
      folders: 2,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/LGBT_flag_square.svg/2048px-LGBT_flag_square.svg.png',
      isActive: false,
      messages: [],
      newMessage: '',
      lastMessage: ''
    },
  ],
  activeChat: null,
  emoji: [
    { smile: '🐑', id: 1 },
    { smile: '✌️', id: 2 },
    { smile: '😌', id: 3 },
    { smile: '😍', id: 4 },
    { smile: '🥰', id: 5 },
    { smile: '😒', id: 6 },
    { smile: '🤡', id: 7 },
    { smile: '😡', id: 8 },
    { smile: '😶', id: 9 }
  ]
}

const dialogsReducer = (state:DialogsT = initialState, action: DialogsACT):DialogsT => {
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
    case DialogsAT.SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.id,
        chats: state.chats.map((chat) => {
          if (chat.id === action.id) {
            return {
              ...chat,
              isActive: true
            }
          }
          return {
            ...chat,
            isActive: false
          }
        })
      }
    case DialogsAT.SET_NEW_MESSAGE:
      return {
        ...state,
        chats: state.chats.map((chat) => {
          if (action.id === chat.id) {
            return {
              ...chat,
              newMessage: action.newText
            }
          }
          return chat
        })
      }
    case DialogsAT.ADD_NEW_MESSAGE:
      return <DialogsT>{
        ...state,
        chats: state.chats.map((chat) => {
          if (chat.isActive) {
            return {
              ...chat,
              messages: [
                {
                  id: chat.messages?.length,
                  sendByMe: true,
                  content: chat.newMessage
                },
                ...chat.messages!,
              ],
              lastMessage: chat.newMessage,
              newMessage: ''
            }
          }
          return chat
        })
      }
    case DialogsAT.ADD_EMOJI:
      return {
        ...state,
        chats: state.chats.map((chat) => {
          if (chat.isActive) {
            return {
              ...chat,
              newMessage: `${chat.newMessage} ${action.smile}`
            }
          }
          return chat
        })
      }
    case DialogsAT.SET_LAST_MESSAGE:
      return {
        ...state,
        chats: state.chats.map((chat) => {
          if (chat.id === action.id) {
            return {
              ...chat,
              lastMessage: action.content
            }
          }
          return chat
        })
      }
    default:
      return {
        ...state
      }
  }
}

export default dialogsReducer
