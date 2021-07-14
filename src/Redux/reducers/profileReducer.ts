import {
    addPostAction,
    ChangeNewPostTextAction,
    ProfileAction,
    ProfileActionTypes,
    ProfileT
} from "../../Types/ProfileT";

let initialState: ProfileT = {

    posts: [
        {name: 'Sanya', text: 'Bilo ne slojno, eto po lubvi', likes: 3},
        {name: 'Danya', text: 'Na football go?', likes: 0}
    ],
    newPostText: 'snus'
};

const profileReducer = (state = initialState, action: ProfileAction): ProfileT => {

    switch (action.type) {
        case ProfileActionTypes.ADD_POST: {
            return {

                ...state,
                posts: [{name: 'Sanya', text: state.newPostText, likes: 0}, ...state.posts ],
                newPostText: ''
            }

        }
        case ProfileActionTypes.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostAC = (): addPostAction => ({type: ProfileActionTypes.ADD_POST})


export const newPostTextAC = (newText: string): ChangeNewPostTextAction =>
    ({type: ProfileActionTypes.UPDATE_NEW_POST_TEXT, newText: newText})

export default profileReducer;