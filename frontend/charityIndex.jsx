import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import CharityIndexItem from './indexItem';
import Loader from "react-loader-spinner";

const CharityIndex = ({city, state, category}) => {

    const [indexItems, setIndex] = React.useState()
    const [error, setError] = React.useState()

    
    React.useEffect( () => {
        let fixedCity = city.split(" ");
        if (fixedCity.length === 1) {
            fixedCity = city
        } else {
            fixedCity = fixedCity.join("%20")
        }
        axios.get(`/call`, { 
            params: {
            fixedCity,
            state,
            category
          }
        })
          .then(res => {
            res.data.message ? setError(res.data.message) : setIndex(res.data);
          })

    }, [])

    if (error) return (
      <div className="error">
        <h1>{error}</h1>
        <Link to="/">Click to Try Again!</Link>
        <p>Make sure you use the correct two-letter state code and spell the city right. If it's a status 404,
          there may be nothing in our database for that city. Try to search for a nearby larger one.
        </p>
      </div>
    )

    return indexItems ? (
      <div className="index">
        <h1>
          We found {indexItems.length} organizations matching your criteria
        </h1>
        <Link to="/">Back to Homepage</Link>
        {indexItems.map(item => (
          <CharityIndexItem charity={item} />
        ))}
      </div>
    ) : (
      <Loader type="BallTriangle" color="rgb(93, 93, 94)" className="loading" />
    );
}

export default CharityIndex;