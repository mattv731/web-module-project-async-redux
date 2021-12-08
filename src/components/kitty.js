import React from 'react';
import { connect } from 'react-redux';
import { fetchCatFact } from '../actions';


const Kitty = ({ fact, error, fetching, fetchCatFact }) => {

    if (error) {
        return <h2>Uh-Oh something broke. {error}</h2>
    }

    if (fetching) {
        return <h3>I'm not a dog, but I'm fetching you facts.</h3>
    }

    const handleFetch = () => {
        fetchCatFact()
    }



    return (
        <div>
            <p><i>is that a fact?</i></p>
            <h4>Click below for a new fun fact!</h4>
            <p>{fact}</p>
            <button onClick={handleFetch}>New Fact!</button>
            <button>See Results</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        fact: state.fact,
        id: state.id,
        fetching: state.fetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchCatFact })(Kitty);