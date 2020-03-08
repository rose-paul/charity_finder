import React from 'react';

const CharityIndexItem = ({ charity }) => {
    const tagline = charity.tagline ? charity.tagline : null
    return (
        <div className="charity-item">
            <h1>{charity.charityName}</h1>
            <h3>{charity.mission}</h3>
            <ul>
                <li>{tagline}</li>
                <li>Site: {charity.websiteURL}</li>
                <li>EIN: {charity.ein}</li>
                {/* <li>Rating: {charity.rating}</li> */}
            </ul>
        </div>
    )
}

export default CharityIndexItem;