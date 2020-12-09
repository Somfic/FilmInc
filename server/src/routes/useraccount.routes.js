const express = require("express");
const validation = require("../middleware/validation");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.get(
    "/",
    authentication,
    authorization,
    require("../controllers/useraccount/list.controller")
);
router.get(
    "/:id",
    authentication,
    authorization,
    require("../controllers/useraccount/get.controller")
);

router.post(
    "/",
    authentication,
    authorization,
    require("../controllers/useraccount/create.controller")
);
router.put(
    "/:id",
    authentication,
    authorization,
    require("../controllers/useraccount/update.controller")
);
router.delete(
    "/:id",
    authentication,
    authorization,
    require("../controllers/useraccount/delete.controller")
);

module.exports = router;