const {Router} = require('express');
const router = Router();
const {getPrediction} = require('../logic/generator');

router.get(
    '', 
    async (req, res) => {
        const {sign} = req.query;
        const prediction = await getPrediction(sign);
        res.json(
            {
                "Prediction": prediction
        })
    }
)

module.exports = router;