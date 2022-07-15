import { Pagination, Verses } from "types";
import { 
    SUCCESS_GET_DATA_QURAN, 
    PROCESS_GET_DATA_QURAN, 
    FAILED_GET_DATA_QURAN } from "./types";

export interface stateInterface {
    verses: Verses[],
    pagging: Pagination,
    status: Boolean
}

export const initialState: stateInterface = {
    verses: [],
    pagging: {
        current_page: 0,
        next_page: 0,
        per_page: 0,
        total_pages: 0,
        total_records: 0
    },
    status: false
}

export const reducer = (state: stateInterface, action: any) => {
    switch (action.type) {
        case SUCCESS_GET_DATA_QURAN:
            return {
                ...state,
                verses: action.payload.verses,
                pagging: action.payload.pagging,
                status: true
            }
        case PROCESS_GET_DATA_QURAN:
            return {
                ...state,
                verses: [],
                pagging: {},
                status: false
            }
        case FAILED_GET_DATA_QURAN:
            return {
                ...state,
                verses: [],
                pagging: {},
                status: false
            }
        default:
            return { ...state };
    }
}

