const logger = require("../logging/logger");
const jwt = require("jsonwebtoken");
const ServerError = require("../error/ServerError");
const UserAccount = require("../models/UserAccount");
const config = require("../config/config");

module.exports = async(req, res, next) => {
    logger.trace("Middleware: authorization");

    try {
        let header = req.headers.authorization;

        if (!header) {
            return next(ServerError.unauthorized("Authorization header missing"));
        }

        let token = header.substring(7, header.length);

        jwt.verify(token, config.jwtSecret, async(err, payload) => {
            if (err) {
                return next(ServerError.unauthorized(err));
            }

            if (payload) {
                if (req.user) {
                    if (req.user.isAdmin) {
                        logger.trace(
                            `Authorized admin: ${req.user.name} (${req.user.uid})`
                        );
                        return next();
                    } else {
                        return next(ServerError.forbidden("No administrative privileges"));
                    }
                } else {
                    return next(ServerError.unauthorized("Not authenticated"));
                }
            } else {
                return next(ServerError.unauthorized("Invalid token"));
            }
        });
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};