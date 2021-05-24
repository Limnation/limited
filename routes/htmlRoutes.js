var db = require("../../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};


//==============================================

const router = require('express').Router();
const { Cart, Design, Inventory, User } = require('../../models');

// GET all carts
router.get('/', async (req, res) => {
  try {

  } catch (err) {
   
  }
});

// GET all designs
router.get('/', async (req, res) => {
  try {

  } catch (err) {
   
  }
});

// GET all inventories
router.get('/', async (req, res) => {
  try {

  } catch (err) {
   
  }
});




// GET one cart
router.get('/:id', async (req, res) => {
  try {

  } catch (err) {
    
  }
});

// GET one design
router.get('/:id', async (req, res) => {
  try {

  } catch (err) {
    
  }
});

// GET one inventory
router.get('/:id', async (req, res) => {
  try {

  } catch (err) {
    
  }
});



// DELETE a card.
// activity 22 solved/routes/libraryCardRoutes, line 49.
router.delete('/:id', async (req, res) => {
  try {
 
  } catch (err) {
 
  }
});


// update a cart item by its `id` value
router.put('/:id', (req, res) => {
  
});
