const express = require("express");
const router = express.Router();
import axios from 'axios';

router.get("/call", (req, res) => {
    axios.get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&categoryID=${req.category}&state=${req.state}&city=${req.fixedCity}`
    );
    return process.env.APP_ID
})

module.exports = router;