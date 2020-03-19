const express = require("express");
const path = require("path");
require("dotenv").config();
console.log(process.env);
const port = process.env.PORT || 8080;
const app = express();
const call = require('./routes/api/call')

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use("/api/call", call);

app.listen(port);
