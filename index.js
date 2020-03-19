const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 8080;
const app = express();
const axios = require('axios');


app.use(express.static(__dirname));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });

app.get("/call", async (req, res) => {
  await axios.get(
    `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&categoryID=${req.query.category}&state=${req.query.state}&city=${req.query.fixedCity}`
  ).then( response => {
    res.send(response.data)
  }
  ).catch( err =>
    res.send(err)
  )
})

app.listen(port);




