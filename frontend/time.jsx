// for time we need location and cause info, later additional settings
// first cause
// then location

import React from "react";
import Location from './location';
import Interest from './interest';

const Time = () => {

    const [currDisplay, setDisplay] = React.useState()
    
     React.useEffect(() => {
       setDisplay(<Location handleSubmit={handleSubmit} />)
     }, []);

    const handleSubmit = (type) => {
      switch (type) {
        case "loc":
          setDisplay(<Interest />)
        case 'interest':
      }
    }
    
    return (
        <div>
          {currDisplay}
        </div>
    );

}

export default Time;
