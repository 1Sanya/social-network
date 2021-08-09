export enum ProfileAT {
  ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
}

export type ProfileACT = AddPostACT | ChangeNewPostTextACT

export type AddPostACT = {
  type: ProfileAT.ADD_POST,
}

export type NewPostT = {
  newPostText: string,
}

export type ChangeNewPostTextACT = {
  type: ProfileAT.UPDATE_NEW_POST_TEXT,
  newText: string,
}

export interface ProfileT {
  posts: Array<WallSinglePostsT>;
  newPostText: string;
}

export interface WallPostsT {
  posts: Array<WallSinglePostsT>;
}

export interface WallSinglePostsT {
  name: string;
  text: string;
  likes: number;
  key: number;
}
