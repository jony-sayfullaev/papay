const assert = require("assert");
const Member = require("../models/Member");
const Product = require("../models/Product");
const { getAllProducts } = require("./productController");
const Definer = require("../lib/mistake");

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
    res.redirect("/resto");
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
    console.log("POST: controller/signupProcess");
    assert(req.file, Definer.general_err3);

    let new_member = req.body;

    new_member.mb_type = "RESTAURANT";

    new_member.mb_image = req.file.path;

    const member = new Member();
    const result = await member.signupData(new_member);

    assert(result, Definer.general_err1_err1);
    req.session.member = result;
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
      result.mb_type === "ADMIN"
        ? res.redirect("/resto/all-restaurant")
        : res.redirect("/resto/products/menu");
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
  try {
    console.log("GET controller/logout");
    req.session.destroy(function () {
      res.redirect("/resto");
    });
  } catch (err) {
    console.log(err);
  }
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
