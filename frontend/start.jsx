import React from "react";
import { Link } from "react-router-dom";

const Start = () => {

    const startEl = React.useRef();

    const hideStart = () => {
        startEl.current.style.display = "none"
    }

    return (
        <header ref={startEl}>
            How can you volunteer?
            <Link onClick={hideStart} to="/time">Time</Link>
            <Link onClick={hideStart} to="/financial">Financial Resources</Link>
            <Link onClick={hideStart} to="/curious">Just Curious</Link>
        </header>
    )

}

export default Start;