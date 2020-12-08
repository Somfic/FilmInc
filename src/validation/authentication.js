const logger = require("../logging/logger");
const jwt = require("jsonwebtoken");
const ServerError = require("../error/ServerError");
const config = require("../config/config");

module.exports = (req, res, next) => {
    try {
        let header = req.headers.authorization;

        if (!header) {
            next(ServerError.unauthorized("Authorization header missing"));
        }

        let token = header.substring(7, header.length);

        jwt.verify(token, config.jwtSecret, (err, payload) => {
            if (err) {
                next(ServerError.unauthorized(err));
            }

            if (payload) {
                let uid = payload.uid;
                let name = payload.name;

                logger.trace(`Authorized user: ${name} (${uid})`);

                req.uid = payload.uid;
                next();
            } else {
                next(ServerError.unauthorized("Invalid token"));
            }
        });
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};