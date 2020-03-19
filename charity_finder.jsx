import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/App';
console.log(process.env.APP_ID)

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
});
