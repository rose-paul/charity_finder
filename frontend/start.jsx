import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <header>
            How can you volunteer?
            <Link to="/time">Time</Link>
            <Link to="/financial">Financial Resources</Link>
            <Link to="/curious">Just Curious</Link>
        </header>
    )

}

export default Start;