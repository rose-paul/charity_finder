// for time we need location and cause info, later additional settings
// first cause
// then location

import React from "react";
import Location from './location';
import Interest from './interest';

const Time = () => {

    //display stage order: Location, Interest Area, Index
    const [currDisplay, setDisplay] = React.useState()
    
    // query vars
    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [cause, setCause] = React.useState("")
    
     React.useEffect(() => {
       setDisplay(<Location handleSubmit={handleSubmit} />)
     }, []);

    const handleSubmit = (type, data) => {
      switch (type) {
        case "loc":
          setCity(data.city)
          setState(data.state)
          setDisplay(<Interest handleSubmit={handleSubmit}/>)

        case 'interest':
          setCategory(data.category)
          
          // pass props here to index component, then build url and call
      }
    }

    return (
        <div className="time-outer">
          {currDisplay}
        </div>
    );

}

export default Time;
