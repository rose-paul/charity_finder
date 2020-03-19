const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 8080;
const app = express();
const router = express.Router()
const axios = require('axios');

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/call", async (req, res) => {
  console.log(req)
  await axios.get(
    `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&categoryID=${req.category}&state=${req.state}&city=${req.fixedCity}`
  ).then( res =>
    res.send(response)
  ).catch( err =>
    res.send(err)
  )
})

app.listen(port);




