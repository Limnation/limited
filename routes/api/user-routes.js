const router = require("express").Router();
const { Cart, Inventory, User } = require("../../models");

// GET all users
router.get("/", async (req, res) => {
  try {
    // find all user
    const userData = await User.findAll({
      // be sure to include its associated Products
      include: [
        {
          model: Cart,
          attributes: ["item", "size"],
        },
      ],
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one user
// hw13 category-routes.js
router.get("/:id", async (req, res) => {
  // find one user by its `id` value
  // be sure to include its associated carts
  try {
    const userData = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Cart, attributes: ["item", "size"] }],
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user.
// Activity 19 routes/api/userRoutes, line 19.
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// user login
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      res.status(400).json({ message: "No accound found for this user." });
      return;
    }
    const validPass = user.checkPassword(req.body.password);

    if (!validPass) {
      res.status(400).json({ message: "Username or password does not match." });
      return;
    }

    res.json({ user, message: "You are now logged in!" });
  } catch (err) {
    res.status(400).json({ message: "No account found." });
  }
});

// DELETE a user.
// activity 22 solved/routes/libraryCardRoutes, line 49.
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {}
});

// update a user item by its `id` value
router.put("/:id", (req, res) => {});

module.exports = router;
