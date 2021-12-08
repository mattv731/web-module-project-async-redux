import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchCatFact = () => {
    return(dispatch) => {
        const num = Math.floor(Math.random()*5);
        dispatch({type:FETCH_START})
        axios.get(`https://cat-fact.herokuapp.com/facts`)
        .then(resp => {
            dispatch({ type: FETCH_SUCCESS, payload: resp.data[num].text })
        })
        .catch(err => {
            dispatch({ type: FETCH_ERROR, payload: err })
        })
    }
}

// export const fetch

export const fetchStart = () => {
    return({ type: FETCH_START});
}

export const fetchSuccess = (value) => {
    return({type: FETCH_SUCCESS, payload: value})
}

export const fetchError = (error) => {
    return({type: FETCH_ERROR, payload: error})
}