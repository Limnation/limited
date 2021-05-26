const router = require("express").Router();
const { Cart, User, Product } = require("../../models");

// GET all carts
router.get("/", async (req, res) => {
  try {
    // find all carts
    const cartData = await Cart.findAll({
      // be sure to include its associated Products
      // include: { model: Product },
      include: [
        {
          model: Product,
          attributes: [
            "id",
            "product_name",
            "image_name",
            "stock",
            "price",
            "type_id",
          ],
        },
      ],
    });
    console.log(cartData);
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one cart
// hw13 category-routes.js
router.get("/:id", async (req, res) => {
  // find one user by its `id` value
  // be sure to include its associated carts
  try {
    const cartData = await Cart.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          //   attributes: ['item','size'],
        },
      ],
    });
    if (!cartData) {
      res.status(404).json({ message: "No cart found with this ID!" });
      return;
    }
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user.
// Activity 19 routes/api/userRoutes, line 19.
router.post("/", async (req, res) => {
  try {
    //       const userData = await User.create({
    //         username: req.body.username,
    //         password: req.body.password,
    //         email: req.body.email,
    //         street: req.body.street,
    //         city: req.body.city,
    //         state: req.body.state,
    //         zip_code: req.body.zip_code,
    //       });
    //       res.status(200).json(userData);
  } catch (err) {
    //       res.status(400).json(err);
  }
});

// DELETE a user.
// activity 22 solved/routes/libraryCardRoutes, line 49.
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {}
});

// update a cart item by its `id` value
router.put("/:id", (req, res) => {});

module.exports = router;
