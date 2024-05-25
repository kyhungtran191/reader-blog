const express = require("express");
const router = express.Router();
// Your default route here
const { AddTag, GetAllTags, UpdateTag } = require("../controllers/tags.ctrl")
router
    .get("/", GetAllTags)
    .post("/", AddTag)
    .patch("/:id", UpdateTag)

module.exports = router;
