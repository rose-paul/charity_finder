// for time we need location and cause info, later additional settings
// first cause
// then location

import React from "react";

const Time = () => {

    const [currDisplay, setDisplay] = React.useState(location)
    
     React.useEffect(() => {
        setDisplay(location)
     }, []);

    const location = (
      <form>
        <input type="text" value="" placeholder="city" />
        <input type="text" value="" placeholder="state" />
        <input type="hidden" value="USA" />
        <input type="submit" value="submit"/>
      </form>
    );

    console.log(currDisplay)
    
    return (
        <div>
            {currDisplay}
        </div>
    );

}

export default Time;
