import React from "react";
import { Link } from "react-router-dom";

const Start = () => {

    return (
        <header className="start">
            <h1>Welcome to Charity Finder!</h1>
            <h3>This site can help you find opportunities to contribute to charitable organizations and 
                causes based on location and interest areas. Get started below.
            </h3>
            <Link to="/questions">Get Started</Link>
        </header>
    )

}

export default Start;