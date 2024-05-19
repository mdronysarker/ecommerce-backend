const express = require("express");
const route = express.Router();

route.get("/registration", function (req, res) {
  res.send("this auth route from registration");
});

module.exports = route;
