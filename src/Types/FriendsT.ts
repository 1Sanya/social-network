export type FriendsState = {
    profiles: Array<FriendsProfileT>
    error: null | string
    loading: boolean

}

export interface FriendsProps {
    profiles: Array<FriendsProfileT>
    followToggle: (userId: number) => void
    call: (userId:number) => void
    message: (userId:number) => void
}


export enum FrinedsAT {
    FOLLOW_TOGGLE = 'FOLLOW_TOGGLE',
    OPED_DIALOG = 'OPEN-DIALOG',
    CALL = 'CALL',
    SET_USERS = 'SET_USERS',
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface FollowToggleACT {
    type: FrinedsAT.FOLLOW_TOGGLE
    userId: number
}

export interface OpenDialogACT {
    type: FrinedsAT.OPED_DIALOG
    userId: number
}

export interface CallACT {
    type: FrinedsAT.CALL
    userId: number
}

export interface SetUsersACT {
    type: FrinedsAT.SET_USERS
    users: Array<any>
}

export interface FetchUsers {
    type: FrinedsAT.FETCH_USERS

}

export interface FetchUsersSuccess {
    type: FrinedsAT.FETCH_USERS_SUCCESS
    payload: any[]

}

export interface FetchUsersError {
    type: FrinedsAT.FETCH_USERS_ERROR
    payload: string

}

export type FriendsACT =
    FollowToggleACT
    | OpenDialogACT
    | CallACT
    | FetchUsers
    | FetchUsersSuccess
    | FetchUsersError


export type FriendsProfileT = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    isFollow: false | true
}

export interface FriendsItemProps {
    followToggle: (userId: number) => void
    name: string
    id: number
    key: number
    isFollow:boolean
    img: string | null


}




