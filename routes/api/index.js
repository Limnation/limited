const router = require("express").Router();

const userRoutes = require("./user-routes");
const cartRoutes = require("./cart-routes");
const productRoutes = require("./product-routes");
const typeRoutes = require("./type-routes");
const searchRoutes = require("./search-routes");

router.use("/users", userRoutes);
router.use("/carts", cartRoutes);
router.use("/products", productRoutes);
router.use("/types", typeRoutes);
router.use("/searches", searchRoutes);

module.exports = router;
