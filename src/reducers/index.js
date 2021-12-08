import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions";



const initialState = {
    fact: '',
    id: 0,
    fetching: false,
    error: ''
}

export function reducer (state = initialState, action) {
    switch(action.type) {
        case (FETCH_START):
            return({
                ...state,
                fact: '',
                id: '',
                fetching: true,
                error: ''
            })
        case (FETCH_SUCCESS):
            return({
                ...state,
                fact: action.payload,
                id: Date.now,
                fetching: false,
                error: ''
            })
        case (FETCH_ERROR):
            return({
                ...state,
                fact: '',
                id: '',
                fetching: false,
                error: action.payload
            })
        default:
            return state;
    }
};