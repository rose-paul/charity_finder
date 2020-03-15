import React from "react";
import { Link } from "react-router-dom";

const Start = () => {

    const startEl = React.useRef();
    const [classN, setClass] = React.useState("")

    const hideStart = () => {
        // startEl.current.style.display = "none"
        setClass("swoopout")
    }

    return (
        <header ref={startEl} className="start">
            <h1>Welcome to Charity Finder!</h1>
            <h3>This site can help you find opportunities to contribute to charitable organizations and 
                causes based on location and interest areas. Get started below.
            </h3>
            <Link to="/questions" onClick={hideStart} className={classN}>Get Started</Link>
        </header>
    )

}

export default Start;