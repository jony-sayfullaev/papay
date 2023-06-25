const express = require("express");
const router_bssr = express.Router();
const restaurantController = require("./controllers/restaurantController");
const { router } = require("./app");
const productController = require("./controllers/productController");
const uploader_product = require("./utils/upload-multer")("products");
const uploader_members = require("./utils/upload-multer")("members");

/**************************
 *        REST API        *
 * ************************/

router_bssr.get("/", restaurantController.home);

// member route
router_bssr
  .get("/sign-up", restaurantController.getSignUpMyRestaurant)
  .post(
    "/sign-up",
    uploader_members.single("restaurant_img"),
    restaurantController.signupProcess
  );

router_bssr
  .get("/login", restaurantController.getLoginMyRestaurant)
  .post("/login", restaurantController.loginProcess);

router_bssr.get("/logout", restaurantController.logout);
router_bssr.get("/check-me", restaurantController.checkSessions);
// product route
router_bssr.get("/products/menu", restaurantController.getMyRestaurantProducts);
router_bssr.post(
  "/products/create",
  restaurantController.validateAuthRestaurant,
  uploader_product.array("product_images", 5),
  productController.addNewProduct
);
router_bssr.post(
  "/products/edit/:id",
  restaurantController.validateAuthRestaurant,
  productController.updateChosenProduct
);

router_bssr.get(
  "/all-restaurant",
  restaurantController.validateAdmin,
  restaurantController.getAllRestaurants
);

module.exports = router_bssr;
