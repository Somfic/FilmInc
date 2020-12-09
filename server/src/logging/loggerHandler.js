const logger = require("../logging/logger");

module.exports = (req, res, next) => {
    let requestInfo = {};

    if (isPopulated(req.headers.authorization)) {
        requestInfo.authorization = req.headers.authorization;
    }

    if (isPopulated(req.query)) {
        requestInfo.query = req.query;
    }

    if (isPopulated(req.body)) {
        requestInfo.body = req.body;
    }

    if (isPopulated(req.params)) {
        requestInfo.params = req.params;
    }

    let url = `${req.protocol}://${req.get("host")}${req.originalUrl}`;

    // Filter HTML support files
    if (
        url.endsWith(".ico") &&
        !url.endsWith(".js") &&
        !url.endsWith(".css") &&
        !url.endsWith(".map")
    ) {
        logger.trace(`${req.method} request: ${url}`, requestInfo);
    } else {
        logger.info(`${req.method} request: ${url}`, requestInfo);
    }

    next();
};

function isPopulated(object) {
    return (
        object != null && (Object.keys(object).length > 0 || object.length > 1)
    );
}