import React from 'react';
import { Link } from 'react-router-dom'

const CharityIndexItem = ({ charity }) => {
    const tagline = charity.tagLine ? charity.tagLine : null
    return (
        <div className="charity-item">
            <div>
                <h1><Link to={charity.websiteURL}>{charity.charityName}</Link></h1>
                <h3>{charity.mission}</h3>
            </div>
            <ul>
                <li>Tagline: {tagline}</li>
                <li>Site: <Link to={charity.websiteURL}>{charity.websiteURL}</Link></li>
                <li>EIN: {charity.ein}</li>
                <li>Rating: {charity.currentRating.rating} / 4</li>
            </ul>
        </div>
    )
}

export default CharityIndexItem;