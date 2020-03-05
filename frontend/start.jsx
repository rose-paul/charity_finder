import React from "react";
import { Link } from "react-router-dom";

const Start = () => {

    const startEl = React.useRef();

    const hideStart = () => {
        startEl.current.style.display = "none"
    }

    return (
        <header ref={startEl}>
            <h1>Welcome to Charity Finder!</h1>
            <h3>We're happy to see you here. There are so many great opportunities to 
                contribute to your community, state, country, world, whatever! Get started 
                below.
            </h3>
            <p>How can you volunteer?</p>
            <Link onClick={hideStart} to="/time">Time</Link>
            <Link onClick={hideStart} to="/financial">Financial Resources</Link>
            <Link onClick={hideStart} to="/curious">Just Curious</Link>
        </header>
    )

}

export default Start;