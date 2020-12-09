const express = require("express");
const validation = require("../middleware/validation");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.get(
    "/",
    authentication,
    require("../controllers/watchable/list.controller")
);
router.get(
    "/:id",
    authentication,
    require("../controllers/watchable/get.controller")
);
router.post(
    "/",
    authentication,
    authorization,
    require("../controllers/watchable/create.controller")
);
router.post(
    "/:id",
    authentication,
    authorization,
    require("../controllers/watchable/dupe.controller")
);
router.put(
    "/:id",
    authentication,
    authorization,
    require("../controllers/watchable/update.controller")
);
router.put(
    "/",
    authentication,
    require("../controllers/watchable/updateMany.controller")
);
router.delete(
    "/:id",
    authentication,
    authorization,
    require("../controllers/watchable/delete.controller")
);

module.exports = router;