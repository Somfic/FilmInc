const express = require("express");

const router = express.Router();

router.post(
    "/login",
    require("../controllers/authentication/login.controller")
);

module.exports = router;