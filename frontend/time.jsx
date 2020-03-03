// for time we need location and cause info, later additional settings
// first cause
// then location

import React from "react";

const Time = () => {

    const [currDisplay, setDisplay] = React.useState(location)
    
    let location = (
        <form>
        <input type="text" value="" placeholder="city" />
        <input type="text" value="" placeholder="state" />
        <input type="hidden" value="USA" />
      </form>
    );
    
    return (
        location
    );

}

export default Time;
