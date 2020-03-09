import React from 'react';
import axios from 'axios'
import CharityIndexItem from './indexItem';
const CharityIndex = ({city, state, category}) => {

    const [indexItems, setIndex] = React.useState()

    React.useEffect(() => {
        let fixedCity = city.split(" ");
        if (fixedCity.length === 1) {
            fixedCity = city
        } else {
            fixedCity = fixedCity.join("%20")
        }
        axios.get(
            `https://api.data.charitynavigator.org/v2/Organizations?app_id=9cf36ade&app_key=49436800e7b516b00333c71ec060cb1c&categoryID=${category}&state=${state}&city=${fixedCity}`
        ).then(
            res => {
                setIndex(res.data)
            }
        )

    }, [])

    return indexItems ? (
        <div className="index">
            <h1>We found {indexItems.length} organizations matching your criteria</h1>
            {
                indexItems.map( item =>  (
                        <CharityIndexItem 
                        charity={item}
                         />
                    )
                )
            }
        </div>
    ) : "loading"
}

export default CharityIndex;