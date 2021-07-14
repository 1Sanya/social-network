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


export enum FriendsAT {
    FOLLOW_TOGGLE = 'FOLLOW_TOGGLE',
    OPED_DIALOG = 'OPEN-DIALOG',
    CALL = 'CALL',
    SET_USERS = 'SET_USERS',
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface FollowToggleACT {
    type: FriendsAT.FOLLOW_TOGGLE
    userId: number
}

export interface OpenDialogACT {
    type: FriendsAT.OPED_DIALOG
    userId: number
}

export interface CallACT {
    type: FriendsAT.CALL
    userId: number
}

export interface SetUsersACT {
    type: FriendsAT.SET_USERS
    users: Array<any>
}

export interface FetchUsers {
    type: FriendsAT.FETCH_USERS

}

export interface FetchUsersSuccess {
    type: FriendsAT.FETCH_USERS_SUCCESS
    payload: any[]

}

export interface FetchUsersError {
    type: FriendsAT.FETCH_USERS_ERROR
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




