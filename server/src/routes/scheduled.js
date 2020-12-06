const express = require("express");
const validationHandler = require("../validation/validationHandler");

const router = express.Router();

router.get("/", require("../controllers/scheduled/list.controller"));
router.get("/:id", require("../controllers/scheduled/get.controller"));
router.post("/", require("../controllers/scheduled/create.controller"));
router.post("/:id", require("../controllers/scheduled/dupe.controller"));
router.put("/:id", require("../controllers/scheduled/update.controller"));
router.put("/", require("../controllers/scheduled/updateMany.controller"));
router.delete("/:id", require("../controllers/scheduled/delete.controller"));

module.exports = router;