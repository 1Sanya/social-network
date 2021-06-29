import {AnyAction} from "redux";

type idType = {
    id: number, name: string
}

type stateType = {
    id: Array<idType>
}

let initialState: stateType = {
    id: [
        {id: 1, name: 'sanya'},
        {id: 2, name: 'Sofia'},
        {id: 3, name: 'zed'},
        {id: 4, name: 'yi'},
        {id: 5, name: 'tom'}
    ]
}

const messengerReducer = (state = initialState, action: AnyAction) => {
    return state
}

export default messengerReducer;