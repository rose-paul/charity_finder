import React from "react";

const Location = ({ handleSubmit }) => {

    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const compileData = () => {

        const data = {
            city,
            state
        }

        handleSubmit('loc', data)
    }

    return (
        <form onSubmit={compileData}>
            <input type="text" value={city} placeholder="city" onChange={(e) => setCity(e.target.value)}/>
            <input type="text" value={state} placeholder="state" onChange={(e) => setState(e.target.value)}/>
            <input type="hidden" value="USA" />
            <input type="submit" value="submit" />
        </form>
    )
}


export default Location;