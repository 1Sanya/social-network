export enum FrinedsActionTypes {
    FOLLOW_TOGGLE = 'FOLLOW_TOGGLE',
    OPED_DIALOG = 'OPEN-DIALOG',
    CALL = 'CALL',
    SET_USERS = 'SET_USERS'
}

export interface FollowToggleAction {
    type: FrinedsActionTypes.FOLLOW_TOGGLE,
    userId: number
}

export interface OpenDialogAction {
    type: FrinedsActionTypes.OPED_DIALOG,
    userId: number
}

export interface CallAction {
    type: FrinedsActionTypes.CALL,
    userId: number
}

export interface SetUsersAction {
    type: FrinedsActionTypes.SET_USERS,
    users: Array<any>
}

export type FriendsAction = FollowToggleAction | OpenDialogAction | CallAction | SetUsersAction

export type profilesType = {
    name: string | null,
    id: number | null,
    uniqueUrlName: null | string,
    photos: {
        small: null | string,
        large: null | string
    },
    status: null | string,
    isFollow: false | true
}

export type FrinedsState = {
    profiles:  Array<profilesType>
}

