const logger = require("../../config/logger");

module.exports = (req, res, next) => {
    logger.trace('Controller: showings/detail');

    res.json('showing detail here');
};
