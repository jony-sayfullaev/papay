const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Main page");
});

router.get("/menu", (req, res) => {
  res.send("Menu Page");
});

router.get("/community", (req, res) => {
  res.send("Community Page");
});

module.exports = router;
