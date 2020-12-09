const express = require("express");
const validation = require("../middleware/validation");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.get(
    "/",
    authentication,
    require("../controllers/scheduled/list.controller")
);
router.get(
    "/:id",
    authentication,
    require("../controllers/scheduled/get.controller")
);
router.post(
    "/",
    authentication,
    authorization,
    require("../controllers/scheduled/create.controller")
);
router.post(
    "/:id",
    authentication,
    authorization,
    require("../controllers/scheduled/dupe.controller")
);
router.put(
    "/:id",
    authentication,
    require("../controllers/scheduled/update.controller")
);
router.put(
    "/",
    authentication,
    authorization,
    require("../controllers/scheduled/updateMany.controller")
);
router.delete(
    "/:id",
    authentication,
    authorization,
    require("../controllers/scheduled/delete.controller")
);

module.exports = router;