const Member = require("../models/Member");

let restaurantController = module.exports;

restaurantController.getSignUpMyRestaurant = async (req, res) => {
  res.render("signup.ejs");
  try {
  } catch (err) {
    console.log(`ERROR: cont/signup ${err.message}`);
    res.json({
      state: "fail",
      message: err.message,
    });
  }
};

restaurantController.signupProcess = async (req, res) => {
  try {
    console.log("POST: cont/signup");
    const data = req.body;
    const member = new Member();
    const new_member = await member.signupData(data);
    res.json({ state: "succeed", data: new_member });
  } catch (err) {
    console.log(`ERROR: cont/signup ${err.message}`);
    res.json({
      state: "fail",
      message: err.message,
    });
  }
};

restaurantController.getLoginMyRestaurant = async (req, res) => {
  res.render("login-page");
  try {
  } catch (err) {
    console.log(`ERROR: cont/signup ${err.message}`);
    res.json({
      state: "fail",
      message: err.message,
    });
  }
};

restaurantController.loginProcess = async (req, res) => {
  console.log("POST cont.login");
  try {
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);
    res.json({ state: "succeed", data: result });
  } catch (err) {
    console.log(`ERROR: cont/signup ${err.message}`);
    res.json({
      state: "fail",
      message: err.message,
    });
  }
};

restaurantController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("Logout Page");
};
