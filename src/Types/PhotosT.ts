export type PhotosState = {
    photos: any[]
    error: null | string
    loading: boolean
}

export enum PhotosAT {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',

}

export type PhotosACT =
    FetchACT |
    FetchSuccessACT |
    FetchErrorACT

export type FetchACT = {
    type: PhotosAT.FETCH_PHOTOS
}

export type FetchSuccessACT = {
    type: PhotosAT.FETCH_PHOTOS_SUCCESS,
    payload: any[]
}

export type FetchErrorACT = {
    type: PhotosAT.FETCH_PHOTOS_ERROR,
    payload: string
}

export type PhotosImageT = {
    imageUrl: string
}
