const ServerError = require("./ServerError");
const logger = require("../logging/logger");

module.exports = (err, req, res, next) => {
    if (err instanceof ServerError) {
        logger.error(`Exception: ${err.error}`);
        res.status(err.code).json(err);
    } else {
        logger.error(`Unexpected exception: ${err}`);
        res.status(500).json(err);
    }
};