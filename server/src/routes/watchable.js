const express = require("express");
const validationHandler = require("../validation/validationHandler");

const router = express.Router();

// List
router.get("/", require("../controllers/watchable/list.controller"));

// Get
router.get("/:id", require("../controllers/watchable/get.controller"));

module.exports = router;
