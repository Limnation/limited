const router = require("express").Router();
const { Product } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const productData = await Product.findAll({

        })
        console.log(productData);
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id);

        // may need later??
        // const product = productData.get({ plain: true });
        // console.log(product);
        
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;