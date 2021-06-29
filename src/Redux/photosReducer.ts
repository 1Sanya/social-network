import {AnyAction} from "redux";

type photosType = {
    id: number, link: string
}

type stateType = {
    photos: Array<photosType>
}

let initialState: stateType = {
    photos: [
        {id: 1, link: 'asd'}
    ]
}

const photosReducer = (state = initialState, action: AnyAction) => {
    return state
}

export default photosReducer;