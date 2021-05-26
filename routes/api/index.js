const router = require("express").Router();

const userRoutes = require("./user-routes");
const cartRoutes = require("./cart-routes");
const productRoutes = require("./product-routes");
const typeRoutes = require("./type-routes");

router.use("/users", userRoutes);
router.use("/carts", cartRoutes);
router.use("/products", productRoutes);
router.use("/types", typeRoutes);

module.exports = router;
