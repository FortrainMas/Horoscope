const {Router} = require('express');
const router = Router();

router.get(
    '', 
    async (req, res) => {
        res.json(
            {
                "Server": "alive"
        })
    }
)

module.exports = router;