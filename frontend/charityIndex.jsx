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
        <div>
            {
                indexItems.map( item =>  (
                        <CharityIndexItem 
                        charity={item}
                        // organization={item.organization.charityName}
                        // mission={item.misson}
                        // tagLine={item.tagline}
                        // website={item.website}
                        // ein={item.ein}
                        // rating={currentRating.rating} 
                         />
                    )
                )
            }
        </div>
    ) : "loading"
}

export default CharityIndex;