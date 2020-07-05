const {Router} = require('express');
const router = Router();
const {makePrediction} = require('../logic/generator');

router.get(
    '', 
    async (req, res) => {
        const {sign} = req.query;
        const prediction = await makePrediction(sign);
        res.json(
            {
                "Server": prediction
        })
    }
)

module.exports = router;