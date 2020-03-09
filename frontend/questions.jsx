// for time we need location and cause info, later additional settings
// first cause
// then location

import React from "react";
import Location from './location';
import Interest from './interest';
import CharityIndex from "./charityIndex";

const Questions = () => {

    //display stage order: Location, Interest Area, Index
    const [currDisplay, setDisplay] = React.useState()
    const [displayNum, setNum] = React.useState(0)
    
    // query vars
    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const [category, setCategory] = React.useState("")
    // const [cause, setCause] = React.useState("")
    
     React.useEffect(() => {
       setDisplay(<Location handleSubmit={handleSubmit} />)
     }, []);

    const handleSubmit = (type, data) => {
      switch (type) {
        case "loc":
          setCity(data.city)
          setState(data.state)
          setNum(1)
          return setDisplay(<Interest handleSubmit={handleSubmit} />)

        case "interest":
          setNum(2)
          setCategory(data.category)
      }
    }

    // both location and interest are submitted, setDisplay out here to have access to vars
    if (displayNum == 2) {
      setNum(3)
      setDisplay(<CharityIndex city={city} state={state} category={category} />)
    };


    return (
        <div className="time-outer">
          {currDisplay}
        </div>
    );

}

export default Questions;
