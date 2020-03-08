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
        <h1>We here now</h1>
    )
}

export default CharityIndex;