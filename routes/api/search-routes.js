const router = require("express").Router();
const { Product } = require("../../models");
const { Type } = require("../../models");

router.get('/', async (req, res) => {
    try {
        const searchData = await Type.findAll({
            include: [
                {
                    model: Product,
                    attributes: [
                        "product_name"
                    ],
                },
            ],
        });
        console.log(searchData);
        res.status(200).json(searchData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const searchData = await Type.findByPk(req.params.id, {
        include: [
                {
                    model: Product,
                    // attributes: [
                    //     "product_name",
                    //     "type_id",
                    // ]
                },
            ],
        });
        console.log(searchData);
        res.status(200).json(searchData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;