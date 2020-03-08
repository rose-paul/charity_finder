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
            <h3>There are so many great opportunities to 
                contribute. This site can connect you with these opportunities. Get started below.
            </h3>
            <p>How can you volunteer?</p>
            <Link onClick={hideStart} to="/time">Time</Link>
            <Link onClick={hideStart} to="/financial">Financial Resources</Link>
        </header>
    )

}

export default Start;