const express = require("express");
const validationHandler = require("../validation/validationHandler");

const router = express.Router();

// List
router.get("/", require("../controllers/showings/list.controller"));

// Detail
router.get(
	"/detail",
	validationHandler(require("../controllers/showings/schemas/detail.schema")),
	require("../controllers/showings/detail.controller")
);

// Create
router.post("/", require("../controllers/showings/create.controller"));

module.exports = router;
