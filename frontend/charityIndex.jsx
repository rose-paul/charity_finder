import React from 'react';

const CharityIndex = (props) => {
    
    React.useEffect(() => {
        console.log(props)
        if (props.city == null) {
            return;
        }
    }, []);

    console.log(props)

    return (
        <h1>{props.city}</h1>
    )
}

export default CharityIndex;