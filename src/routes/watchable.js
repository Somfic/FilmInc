const express = require("express");
const validationHandler = require("../validation/validationHandler");

const router = express.Router();

router.get("/", require("../controllers/watchable/list.controller"));
router.get("/:id", require("../controllers/watchable/get.controller"));
router.post("/", require("../controllers/watchable/create.controller"));
router.post("/:id", require("../controllers/watchable/dupe.controller"));
router.put("/:id", require("../controllers/watchable/update.controller"));
router.put("/", require("../controllers/watchable/updateMany.controller"));
router.delete("/:id", require("../controllers/watchable/delete.controller"));

module.exports = router;