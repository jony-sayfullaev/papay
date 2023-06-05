const Member = require("../models/Member");

let restaurantController = module.exports;

restaurantController.getMyRestaurantData = async (req, res) => {
  try {
    console.log("GET: controller/getMyRestaurantData");
    res.render("restaurant-menu.ejs");
  } catch (err) {
    console.log(`ERROR: cont/signup ${err.message}`);
    res.json({
      state: "fail",
      message: err.message,
    });
  }
};

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
    req.session.member = new_member;
    res.redirect("/resto/products/menu");
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
    req.session.member = result;
    req.session.save(function () {
      res.redirect("/resto/products/menu");
    });
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

restaurantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "success", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};
