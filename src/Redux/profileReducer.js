const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        {name: 'Sanya', text: 'Bilo ne slojno, eto po lubvi', likes: 0},
        {name: 'Danya', text: 'Na football go?', likes: 0}
    ],
    newPostText: 'Snus'
}

const profileReducer = (state = initialState,action) => {
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

export const addPostActionCreator = () => ({type: ADD_POST})
export const newPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;