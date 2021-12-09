import React from 'react';
import { connect } from 'react-redux';
import { fetchCatFact, fetchCatImg } from '../actions';


const Kitty = ({ fact, error, fetching, img, fetchCatFact, fetchCatImg }) => {

    if (error) {
        return <h2>Uh-Oh something broke. {error}</h2>
    }

    if (fetching) {
        return <h3>I'm not a dog, but I'm fetching you facts.</h3>
    }

    const handleFetchFact = () => {
        console.log("a")
        fetchCatFact()
    }

    const handleFetchImg = () => {
        fetchCatImg()
    }

    return (
        <div>
            <p><i>is that a fact?</i></p>
            <h4>Click below for a new fun fact!</h4>
            <p>{fact}</p>
            <button onClick={handleFetchFact}>New Fact!</button>
            <button onClick={handleFetchImg}>Random Cat Picture</button>
            <img src={`${img}`} width="350px"/>
        </div>
    )
}
 
const mapStateToProps = state => {
    return {
        fact: state.fact,
        id: state.id,
        fetching: state.fetching,
        error: state.error,
        img: state.img
    }
}

export default connect(mapStateToProps, { fetchCatFact, fetchCatImg })(Kitty);