const express = require("express");
const validationHandler = require("../validation/validation");

const router = express.Router();

router.post("/login", require("../controllers/authentication/login.controller"));
router.post("/register", require("../controllers/authentication/register.controller"));

module.exports = router;