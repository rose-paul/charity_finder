import React from 'react';

const CharityIndex = ({city, state, category}) => {

    return (
        <div>
            <h1>City: {city}</h1>
            <h1>State: {state}</h1>
            <h1>category: {category}</h1>
        </div>
    )
}

export default CharityIndex;