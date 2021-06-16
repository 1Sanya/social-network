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

            let newPost = {
                name: 'Nasty',
                text: state.newPostText,
                likes: 0
            };

            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]

            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}

            stateCopy.newPostText = action.newText;
            return stateCopy}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const newPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;