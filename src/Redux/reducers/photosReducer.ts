import {PhotosACT, PhotosAT, PhotosState} from "../../Types/PhotosT";


let initialState: PhotosState = {
    photos: [],
    error: null,
    loading: false
}

const photosReducer = (state = initialState, action: PhotosACT): PhotosState => {
    switch (action.type) {
        case PhotosAT.FETCH_PHOTOS:
            return {loading: true, error: null, photos: []}
        case PhotosAT.FETCH_PHOTOS_SUCCESS:
            return {loading: false, error: null, photos: action.payload}
        case PhotosAT.FETCH_PHOTOS_ERROR:
            return {loading: false, error: action.payload, photos: []}



        default: return state
    }
}

export default photosReducer;