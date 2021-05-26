const router = require("express").Router();

const userRoutes = require("./user-routes");
const cartRoutes = require("./cart-routes");

router.use("/users", userRoutes);
router.use("/carts", cartRoutes);

module.exports = router;
