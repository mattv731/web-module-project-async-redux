import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, FETCH_IMG } from "../actions";



const initialState = {
    fact: '',
    id: 0,
    fetching: false,
    error: false,
    img: ''
}

export function reducer (state = initialState, action) {
    switch(action.type) {
        case (FETCH_START):
            return({
                ...state,
                fact: '',
                id: '',
                fetching: true,
                error: false,
                img: state.img
            })
        case (FETCH_SUCCESS):
            return({
                ...state,
                fact: action.payload,
                id: Date.now,
                fetching: false,
                error: false,
                img: state.img
            })
        case (FETCH_ERROR):
            return({
                ...state,
                fact: '',
                id: '',
                fetching: false,
                error: true,
                img: state.img
            })
        case (FETCH_IMG):
            return({
                ...state,
                fact: state.fact,
                id: state.id,
                fetching: false,
                error: false,
                img: action.payload
            })
        default:
            return state;
    }
};