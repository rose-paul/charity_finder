import React from "react";

const Location = ({ handleSubmit }) => {

    return (
        <form onSubmit={() => handleSubmit('loc')}>
            <input type="text" value="" placeholder="city" />
            <input type="text" value="" placeholder="state" />
            <input type="hidden" value="USA" />
            <input type="submit" value="submit" />
        </form>
    )
}


export default Location;