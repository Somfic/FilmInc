const express = require("express");
const validation = require("../validation/validation");
const authentication = require("../validation/authentication");

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
    require("../controllers/scheduled/create.controller")
);
router.post(
    "/:id",
    authentication,
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
    require("../controllers/scheduled/updateMany.controller")
);
router.delete(
    "/:id",
    authentication,
    require("../controllers/scheduled/delete.controller")
);

module.exports = router;