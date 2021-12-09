import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_IMG = 'FETCH_IMG';

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

export const fetchCatImg = () => {
    return(dispatch) => {
        // dispatch({type:FETCH_START})
        axios.get('https://aws.random.cat/meow')
        .then(resp => {
            dispatch({type: FETCH_IMG, payload: resp.data.file })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const fetchStart = () => {
    return({ type: FETCH_START});
}

export const fetchSuccess = (value) => {
    return({type: FETCH_SUCCESS, payload: value})
}

export const fetchError = () => {
    return({type: FETCH_ERROR})
}

export const fetchImg = () => {
    return({type: FETCH_IMG})
}