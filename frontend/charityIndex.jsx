import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import CharityIndexItem from './indexItem';
import Loader from "react-loader-spinner";
const CharityIndex = ({city, state, category}) => {

    const [indexItems, setIndex] = React.useState()
    const [error, setError] = React.useState()

    React.useEffect(() => {
        let fixedCity = city.split(" ");
        if (fixedCity.length === 1) {
            fixedCity = city
        } else {
            fixedCity = fixedCity.join("%20")
        }
        axios.get(
            // `https://api.data.charitynavigator.org/v2/Organizations?app_id=${app_id}&app_key=${app_key}&categoryID=${category}&state=${state}&city=${fixedCity}`
            `https://api.data.charitynavigator.org/v2/Organizations?app_id=9cf36ade&app_key=49436800e7b516b00333c71ec060cb1c&categoryID=${category}&state=${state}&city=${fixedCity}`
        ).then(
            res => {
              setIndex(res.data)
            }
        ).catch(
          err => {
            setError(err.response)
          }
        )

    }, [])

    if (error) return (
      <div className="error">
        <h1>Status {error.status}: {error.statusText}</h1>
        <p>{error.data.errorMessage.message}</p>
        <Link to="/questions">Try Again!</Link>
      </div>
    )

    return indexItems ? (
      <div className="index">
        <h1>
          We found {indexItems.length} organizations matching your criteria
        </h1>
        {indexItems.map(item => (
          <CharityIndexItem charity={item} />
        ))}
      </div>
    ) : (
      <Loader type="BallTriangle" color="rgb(93, 93, 94)" className="loading" />
    );
}

export default CharityIndex;