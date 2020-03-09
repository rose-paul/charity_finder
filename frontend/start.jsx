import React from "react";

const Start = ({ handleSubmit }) => {

    const startEl = React.useRef();

    const hideStart = () => {
        startEl.current.style.display = "none"
        handleSubmit("start")
    }

    return (
        <header ref={startEl}>
            <h1>Welcome to Charity Finder!</h1>
            <h3>This site can help you find opportunities to contribute to charitable organizations and 
                causes based on location and interest areas. Get started below.
            </h3>
            <p onClick={hideStart} className="hover">Get Started</p>
        </header>
    )

}

export default Start;