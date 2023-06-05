const express = require("express");
const router_bssr = express.Router();
const restaurantController = require("./controllers/restaurantController");
const { router } = require("./app");
const productController = require("./controllers/productController");
const { uploadProductImage } = require("./utils/upload-multer");

/**************************
 *        REST API        *
 * ************************/

// member route
router_bssr
  .get("/signup", restaurantController.getSignUpMyRestaurant)
  .post("/signup", restaurantController.signupProcess);

router_bssr
  .get("/login", restaurantController.getLoginMyRestaurant)
  .post("/login", restaurantController.loginProcess);

router_bssr.get("/logout", restaurantController.logout);
router_bssr.get("/check-me", restaurantController.checkSessions);
// product route
router_bssr.get("/products/menu", restaurantController.getMyRestaurantData);
router_bssr.post(
  "/products/create",
  restaurantController.validateAuthRestaurant,
  uploadProductImage.single("product_image"),
  productController.addNewProduct
);
router_bssr.post("/products/edit/:id", productController.updateChosenProduct);
module.exports = router_bssr;
