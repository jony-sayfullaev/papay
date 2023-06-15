const Member = require("../models/Member");
const Product = require("../models/Product");
const { getAllProducts } = require("./productController");

let restaurantController = module.exports;

restaurantController.home = (req, res) => {
  try {
    console.log("GET: cont/home");
    res.render("home-page.ejs");
  } catch (err) {
    console.log(`ERROR: cont/signup ${err.message}`);
    res.json({
      state: "fail",
      message: err.message,
    });
  }
};

restaurantController.getMyRestaurantProducts = async (req, res) => {
  try {
    console.log("GET: controller/getMyRestaurantProducts");
    const product = new Product();
    const data = await product.getAllProductsDataResto(res.locals.member);
    res.render("restaurant-menu.ejs", { restaurant_data: data });
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

restaurantController.validateAuthRestaurant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else {
    res.json({
      state: "fail",
      message: "only authenticated members with restaurant type",
    });
  }
};

restaurantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "success", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};
