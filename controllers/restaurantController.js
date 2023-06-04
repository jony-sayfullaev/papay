const Member = require("../models/Member");

let restaurantController = module.exports;

restaurantController.getSignUpMyRestaurant = async (req, res) => {
  try {
    console.log("GET: controller/signup");
    res.render("signup.ejs");
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
    console.log("POST: controller/signup");
    const data = req.body;
    const member = new Member();
    const new_member = await member.signupData(data);

    // SESSION
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
  try {
    console.log("GET: controller/login");
    res.render("login-page.ejs");
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
    console.log(`ERROR: controller/signup ${err.message}`);
    res.json({
      state: "fail",
      message: err.message,
    });
  }
};

restaurantController.logout = (req, res) => {
  console.log("GET controller/logout");
  res.send("Logout Page");
};
