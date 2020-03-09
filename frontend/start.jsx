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
            <h3>This site can help you find opportunities to contribute to charitable organizations and 
                causes based on location and interest areas. Get started below.
            </h3>
            <Link onClick={hideStart} to="/questions">Get Started</Link>
        </header>
    )

}

export default Start;