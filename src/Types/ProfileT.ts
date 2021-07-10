export enum ProfileActionTypes {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
}

export type ProfileAction = addPostAction | ChangeNewPostTextAction

export interface addPostAction {
    type: ProfileActionTypes.ADD_POST
}

export interface ChangeNewPostTextAction {
    type: ProfileActionTypes.UPDATE_NEW_POST_TEXT,
    newText: string
}


export interface ProfileT {
    posts: Array<WallSinglePostsT>,
    newPostText: string
}

export interface WallPostsT {
    posts: Array<WallSinglePostsT>
}

export interface WallSinglePostsT {
    name: string
    text: string
    likes: number
}