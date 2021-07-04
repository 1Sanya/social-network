import {AnyAction} from "redux";


export type PhotosState = {
    photos: any[]
}


let initialState: PhotosState = {
    photos: []
}

const photosReducer = (state = initialState, action: AnyAction): PhotosState => {
    return state
}

export default photosReducer;