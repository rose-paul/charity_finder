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
        // axios
        //   .get(
        //     `https://api.data.charitynavigator.org/v2/Organizations?app_id=${appId}&app_key=${appKey}&categoryID=${category}&state=${state}&city=${fixedCity}`
        //   )
        const req = {
          fixedCity,
          state,
          category
        }
      axios.get(`/api/call`, req)
          .then(res => {
            console.log(res)
            setIndex(res.data);
            console.log(indexItems)
          })
          .catch(err => {
            setError(err.response);
          });

    }, [])

    if (error) return (
      <div className="error">
        <h1>Status {error.status}: {error.statusText}</h1>
        <p>{error.data.errorMessage.message}</p>
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