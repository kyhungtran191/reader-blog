const express = require("express");
const router = express.Router();

// Your default route here
router.get('/', (req, res) => {
    return res.json({ message: "Hello Users" })
})

module.exports = router