const ServerError = require("./ServerError");
const logger = require("../logging/logger");

module.exports = (err, req, res, next) => {
    if (err instanceof ServerError) {
        logger.error(err.message);
        res.status(err.code).json(err.message);
    } else {
        logger.error(`Unexpected exception: ${err}`);
        res.status(500).json({ error: err.message });
    }
};