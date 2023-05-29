const express = require("express");
const router = express.Router();
const memeberController = require("./controllers/memberController");
// member
// router.get("/", memeberController);
router.post("/signup", memeberController.signup);
router.post("/login", memeberController.login);
router.get("/logout", memeberController.logout);

// others
router.get("/menu", (req, res) => {
  res.send("Menu Page");
});

router.get("/community", (req, res) => {
  res.send("Community Page");
});

module.exports = router;
