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


interface postsType {
    name: string, text: string, likes: number

}

export interface Profile {
    posts: Array<postsType>,
    newPostText: string
}

