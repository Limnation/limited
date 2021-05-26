const router = require("express").Router();
const { Type } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const typeData = await Type.findAll({

        })
        console.log(typeData);
        res.status(200).json(typeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const typeData = await Type.findByPk(req.params.id);
        
        res.status(200).json(typeData);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;