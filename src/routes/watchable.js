const express = require("express");
const validation = require("../validation/validation");
const authentication = require("../validation/authentication");

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
    require("../controllers/watchable/create.controller")
);
router.post(
    "/:id",
    authentication,
    require("../controllers/watchable/dupe.controller")
);
router.put(
    "/:id",
    authentication,
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
    require("../controllers/watchable/delete.controller")
);

module.exports = router;