import { GET_CHAPTER } from "../types";

const initialState = {
    data: []
}

interface actionType {
    type: String,
    payload: any
}

const ChapterReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case GET_CHAPTER:
            console.log(action.payload)
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
}

export default ChapterReducer;