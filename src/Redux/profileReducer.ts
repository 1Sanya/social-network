import {AnyAction} from "redux";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type postsType = {
    name: string, text: string, likes: number

}

export  type stateType = {
    posts: Array<postsType>,
    newPostText: string
}


let initialState: stateType = {
    posts: [
        {name: 'Sanya', text: 'Bilo ne slojno, eto po lubvi', likes: 3},
        {name: 'Danya', text: 'Na football go?', likes: 0}
    ],
    newPostText: 'snus'
}


const profileReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ADD_POST: {


            return {

                ...state,
                posts: [...state.posts, {name: 'Sanya', text: state.newPostText, likes: 0}],
                newPostText: ''
            }

        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}
type addPostAT = {
    type: typeof ADD_POST
}
export const addPostAC = ():addPostAT => ({type: ADD_POST})

type newPostTextAT = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string
}
export const newPostTextAC = (text: string):newPostTextAT =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;