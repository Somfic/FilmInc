const logger = require("../../config/logger");

module.exports = (req, res, next) => {
    if(req.query.id) { next(); return; }

    logger.trace('Controller: showings/list');

    res.json('all showings here');
};
